import app from '../../src/app';
import request from 'supertest';

describe('fizzbuzzController', () => {
  beforeEach(() => {
    console.error = jest.fn();
  });

  it('Should send error 400 if fizzNumber is not a number', async () => {
    //Arrange
    const payload = { fizzNumber: 'iauhv' };

    //Act
    const result = await request(app).get('/api/fizzbuzz').send(payload);

    //Assert
    expect(result.statusCode).toEqual(400);
  });
  it('Should send error 400 if buzzNumber is not a number', async () => {
    //Arrange
    const payload = { buzzNumber: 'laksdjfk' };

    //Act
    const result = await request(app).get('/api/fizzbuzz').send(payload);

    //Assert
    expect(result.statusCode).toEqual(400);
  });
  it('Should send error 400 if minNumber is not a number', async () => {
    //Arrange
    const payload = { minNumber: 'ahaioav' };

    //Act
    const result = await request(app).get('/api/fizzbuzz').send(payload);

    //Assert
    expect(result.statusCode).toEqual(400);
  });
  it('Should send error 400 if maxNumber is not a number', async () => {
    //Arrange
    const payload = { maxNumber: 'aosojv' };

    //Act
    const result = await request(app).get('/api/fizzbuzz').send(payload);

    //Assert
    expect(result.statusCode).toEqual(400);
  });
  it('Should send error 400 if fizzNumber is zero', async () => {
    //Arrange
    const payload = { fizzNumber: 0 };

    //Act
    const result = await request(app).get('/api/fizzbuzz').send(payload);

    //Assert
    expect(result.statusCode).toEqual(400);
  });
  it('Should send error 400 if buzzNumber is zero', async () => {
    //Arrange
    const payload = { buzzNumber: 0 };

    //Act
    const result = await request(app).get('/api/fizzbuzz').send(payload);

    //Assert
    expect(result.statusCode).toEqual(400);
  });
});
