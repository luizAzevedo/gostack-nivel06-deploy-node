// import AppError from '@shared/errors/AppError';
import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';

import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';

import ListProvidersService from './ListProvidersService';

let fakeUsersRepository: FakeUsersRepository;
let fakeCacheProvider: FakeCacheProvider;
let listProvidersService: ListProvidersService;

describe('UpdateProfile', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeCacheProvider = new FakeCacheProvider();

    listProvidersService = new ListProvidersService(
      fakeUsersRepository,
      fakeCacheProvider,
    );
  });

  it('shoud be able to list the profile', async () => {
    const user1 = await fakeUsersRepository.create({
      name: 'Luiz Fernando 1',
      email: 'lfaazevedo1@hotmail.com',
      password: '123456',
    });

    const user2 = await fakeUsersRepository.create({
      name: 'Luiz Fernando 2',
      email: 'lfaazevedo2@hotmail.com',
      password: '123456',
    });

    const loggedUser = await fakeUsersRepository.create({
      name: 'Luiz Fernando 3',
      email: 'lfaazevedo3@hotmail.com',
      password: '123456',
    });

    const providers = await listProvidersService.execute({
      user_id: loggedUser.id,
    });

    expect(providers).toEqual([user1, user2]);
  });

  // it('shoud not be able to show the profile from non-existing user', async () => {
  //   await expect(
  //     listProvidersService.execute({
  //       user_id: 'non-existing-user-id',
  //     }),
  //   ).rejects.toBeInstanceOf(AppError);
  // });
});
