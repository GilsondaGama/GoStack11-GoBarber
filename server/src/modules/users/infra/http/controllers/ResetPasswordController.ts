import { Request, Response } from 'express';
import { container } from 'tsyringe';
<<<<<<< HEAD
import ResetPasswordService from '@modules/users/services/ResetPasswordService';

export default class ResetPasswordController {
=======

import ResetPasswordService from '@modules/users/services/ResetPasswordService';

export default class ForgotPasswordController {
>>>>>>> b551b0473227187913d775199ae4155f0aafaebc
  public async create(request: Request, response: Response): Promise<Response> {
    const { password, token } = request.body;

    const resetPassword = container.resolve(ResetPasswordService);

    await resetPassword.execute({
<<<<<<< HEAD
      password,
      token,
=======
      token,
      password,
>>>>>>> b551b0473227187913d775199ae4155f0aafaebc
    });

    return response.status(204).json();
  }
}
