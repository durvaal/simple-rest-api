const HttpStatus = require('http-status');
const apiFactory = require('../../../factory/apiFactory');
const { todoData } = require('../../../../routes/todo/todoData');

describe('API ::: Router ::: TO DO', () => {
  const resetTodoData = () => {
    todoData.list = [
      {
        id: 1,
        task: "Fazer 10 abdominais"
      },
      {
        id: 2,
        task: "Fazer supino"
      }
    ];
    todoData.index = 2;
  };

  beforeEach(() => {
    resetTodoData();
  });

  describe('GET', () => {
    test('should return all data', (done) => {
      apiFactory
        .get('/todo')
        .set('Content-Type', 'application/json')
        .end((err, res) => {
          done();
          const { body, status } = res;

          expect(status).toEqual(HttpStatus.OK);
          expect(body).toHaveLength(2);

          for (let item of body) {
            expect(item).toStrictEqual({
              id: expect.any(Number),
              task: expect.any(String),
            });
          }
        });
    });
  });

  describe('POST', () => {
    test('should insert a new data and return all data', (done) => {
      apiFactory
        .post('/todo')
        .set('Content-Type', 'application/json')
        .send({
          "task": "Fazer agachamento"
        })
        .end((err, res) => {
          done();
          const { body, status } = res;

          expect(status).toEqual(HttpStatus.OK);
          expect(body).toHaveLength(3);

          for (let item of body) {
            expect(item).toStrictEqual({
              id: expect.any(Number),
              task: expect.any(String),
            });
          }
        });
    });
  });

  describe('PUT', () => {
    test('should update a existing data and return all data', (done) => {
      apiFactory
        .put('/todo')
        .set('Content-Type', 'application/json')
        .send({
          "id": 1,
          "task": "Fazer 1000 abdominais"
        })
        .end((err, res) => {
          done();
          const { body, status } = res;

          expect(status).toEqual(HttpStatus.OK);
          expect(body).toHaveLength(2);

          for (let item of body) {
            expect(item).toStrictEqual({
              id: expect.any(Number),
              task: expect.any(String),
            });
          }
        });
    });
  });

  describe('DELETE', () => {
    test('should delete a existing data and return all data', (done) => {
      apiFactory
        .delete('/todo/1')
        .set('Content-Type', 'application/json')
        .end((err, res) => {
          done();
          const { body, status } = res;

          expect(status).toEqual(HttpStatus.OK);
          expect(body).toHaveLength(1);

          for (let item of body) {
            expect(item).toStrictEqual({
              id: expect.any(Number),
              task: expect.any(String),
            });
          }
        });
    });
  });
});