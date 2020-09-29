import {Request, Response} from 'express'
 
import db from '../database/connection';
import convertHourTominutes from '../utils/convertHourToMinutes';

interface ScheduleItem{
    week_day:number;
    from:string;
    to:string;
}

export default class ProblemsController{
    async index(request:Request,response:Response){
        const filters = request.query;
        const subject = filters.subject as string;
        const week_day = filters.week_day as string;
        const time = filters.time as string;

        if(!filters.week_day || !filters.subject || !filters.time){
            return response.status(400).json({
                error: 'Missing filters to search classes'
            })
        }
        const timeInMinutes = convertHourTominutes(time);

        const problems = await db('problems')
                .whereExists(function(){
                    this.select("problems_schedule.*")
                    .from('problems_schedule')
                    .whereRaw('`problems_schedule`.`problems_id` = `problems`.`id`')
                    .whereRaw('`problems_schedule`.`week_day`= ??',[Number(week_day)])
                    .whereRaw('`problems_schedule`.`from` <= ??',[timeInMinutes])
                    .whereRaw('`problems_schedule`.`to` > ??',[timeInMinutes])
                })
                .where('problems.subject', '=', subject)
                .join('users','problems.user_id', '=', 'users.id')
                .select(['problems.*','users.*']);

        return response.json(problems)    


        // return response.send();
        
    }



    async create(request:Request,response:Response){
        const {
            nome,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            schedule
        } = request.body;
        
        const trx = await db.transaction();
        
        try {
            const insertedUsersIds = await trx('users').insert({
                nome,
                avatar,
                whatsapp,
                bio,
            });
        
            const user_id = insertedUsersIds[0];
            const insertedProblemsIds = await trx('problems').insert({
                subject,
                cost,
                user_id,
            });
            
            const problems_id = insertedProblemsIds[0];
            const problemsSchedule = schedule.map((scheduleItem: ScheduleItem) => {
                return{
                    problems_id,
                    week_day: scheduleItem.week_day,
                    from: convertHourTominutes(scheduleItem.from),
                    to: convertHourTominutes(scheduleItem.to), 
                };
            })
        
            await trx('problems_schedule').insert(problemsSchedule);
            await trx.commit();
            
            return response.status(201).send();
                
        } catch (err) {
            await trx.rollback();
            return response.status(400).json({
                error: 'Unexpected error while creating new class'
            })     
        }
       
    }
}