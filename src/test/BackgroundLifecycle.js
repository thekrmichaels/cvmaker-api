const { describe, it } = require('node:test')
const app = require('../../app')
const chai = require('chai')
const expect = require('chai').expect

chai.use(require('chai-http'))

const resources = ['educations', 'experiences']
const createdResourceId = {}
const userId = '653c6f6586e5d60a9fcd88f1'

const testData = {
  educations: {
    createData: {
      id: '60b6f9d7a312e6e7fbb80d87',
      user_id: userId,
      category: '65522d1678ac8070930f2c26',
      name: 'Computer Science',
      place: {
        name: 'Example University',
        location: 'New York, USA'
      },
      startDate: '2015-09-01',
      endDate: '2019-05-15'
    },
    updateData: {
      user_id: userId,
      name: 'Data Science',
      place: {
        name: 'Another University',
        location: 'San Francisco, USA'
      },
      startDate: '2018-08-15',
      endDate: '2022-06-30'
    }
  },
  experiences: {
    createData: {
      id: '60b6f9d7a312e6e7fbb80d88',
      user_id: userId,
      category: '65522d1678ac8070930f2c27',
      name: 'Frontend Developer',
      place: {
        name: 'Example Company',
        location: 'New York, USA'
      },
      startDate: '2015-09-01',
      endDate: '2019-05-15',
      description: 'Worked as a software developer.'
    },
    updateData: {
      user_id: userId,
      name: 'Project Manager',
      place: {
        name: 'Another Company',
        location: 'San Francisco, USA'
      },
      startDate: '2018-08-15',
      endDate: '2022-06-30',
      description: 'Worked as a data scientist.'
    }
  }
}

describe('Background Lifecycle', () => {
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
