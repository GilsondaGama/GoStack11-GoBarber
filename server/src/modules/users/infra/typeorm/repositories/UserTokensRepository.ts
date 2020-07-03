import { getRepository, Repository } from 'typeorm';

import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository';
<<<<<<< HEAD
=======

>>>>>>> b551b0473227187913d775199ae4155f0aafaebc
import UserToken from '../entities/UserToken';

class UserTokensRepository implements IUserTokensRepository {
  private ormRepository: Repository<UserToken>;

  constructor() {
    this.ormRepository = getRepository(UserToken);
  }

<<<<<<< HEAD
  public async findByToken(token: string): Promise<UserToken | undefined> {
=======
  public async findById(token: string): Promise<UserToken | undefined> {
>>>>>>> b551b0473227187913d775199ae4155f0aafaebc
    const userToken = await this.ormRepository.findOne({
      where: { token },
    });

    return userToken;
  }

  public async generate(user_id: string): Promise<UserToken> {
    const userToken = this.ormRepository.create({
      user_id,
    });

    await this.ormRepository.save(userToken);

    return userToken;
  }
}

export default UserTokensRepository;
