import { Router } from 'express';
import { parseISO } from 'date-fns';

import AppointmentsRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentsRepository';
import CreateAppointmentService from '@modules/appointments/services/CreateAppointService';

import ensureAutenticated from '@modules/users/infra/http/middlewares/ensureAutenticated';

const appointmentsRouter = Router();
const appointmentsRepository = new AppointmentsRepository();

appointmentsRouter.use(ensureAutenticated);

// appointmentsRouter.get('/', async (request, response) => {
//   const apppointments = await appointmentsRepository.find();

//   return response.json(apppointments);
// });

appointmentsRouter.post('/', async (request, response) => {
  const { provider_id, date } = request.body;

  const parsedDate = parseISO(date);

  const createAppoint = new CreateAppointmentService(appointmentsRepository);

  const appointment = await createAppoint.execute({
    provider_id,
    date: parsedDate,
  });

  return response.json(appointment);
});

export default appointmentsRouter;
