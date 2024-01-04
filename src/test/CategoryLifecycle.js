const { describe, it } = require('node:test')
const app = require('../../app')
const chai = require('chai')
const expect = require('chai').expect

chai.use(require('chai-http'))

const resources = ['contacts', 'descriptions', 'titles']
const createdResourceId = {}
const userId = '653c6f6586e5d60a9fcd88f1'

const testData = {
  contacts: {
    createData: {
      id: '5f4a0d8e94d1ca3a1257b280',
      user_id: userId,
      name: 'email',
      content: 'john.doe@example.com'
    },
    updateData: {
      user_id: userId,
      name: 'email',
      content: 'jane.smith@example.com'
    }
  },
  descriptions: {
    createData: {
      id: '5e8c82c020b7cf79d28e846c',
      user_id: userId,
      content: 'Responsible for front-end development of web applications.'
    },
    updateData: {
      user_id: userId,
      content: 'Managing marketing campaigns and strategies for the company.'
    }
  },
  titles: {
    createData: {
      id: '5e8c82c020b7cf79d28e846b',
      user_id: userId,
      name: 'Software Engineer'
    },
    updateData: {
      user_id: userId,
      name: 'Marketing Manager'
    }
  }
}

describe('Category Lifecycle', () => {
  resources.forEach((resource) => {
    it(`should create ${resource}`, async () => {
      const newResource = testData[resource].createData

      const res = await chai
        .request(app)
        .post(`/api/${resource}`)
        .send(newResource)
      expect(res).to.have.status(201)

      createdResourceId[resource] = newResource.id
    })

    it(`should read ${resource}`, async () => {
      const res = await chai
        .request(app)
        .get(`/api/${resource}/${userId}`)
      expect(res).to.have.status(200)
      // eslint-disable-next-line no-unused-expressions
      expect(res).to.be.json
    })

    it(`should update ${resource}`, async () => {
      const updatedResource = testData[resource].updateData

      const res = await chai
        .request(app)
        .patch(`/api/${resource}/${createdResourceId[resource]}`)
        .send(updatedResource)
      expect(res).to.have.status(200)
      // eslint-disable-next-line no-unused-expressions
      expect(res).to.be.json
    })

    it(`should delete ${resource}`, async () => {
      const res = await chai
        .request(app)
        .delete(`/api/${resource}/${createdResourceId[resource]}`)
      expect(res).to.have.status(200)
      // eslint-disable-next-line no-unused-expressions
      expect(res).to.be.json
    })
  })
})
