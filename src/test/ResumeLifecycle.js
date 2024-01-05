const { describe, it } = require('node:test')
const app = require('../../app')
const chai = require('chai')
const expect = require('chai').expect

chai.use(require('chai-http'))

let createdResumeId
const userId = '653c6f6586e5d60a9fcd88f1'
const testData = {
  createData: {
    id: '60b6f9d7a312e6e7fbb80d9a',
    user_id: userId,
    name: 'Resume 1',
    titleName: '5e8c82c020b7cf79d28e846b',
    contacts: ['5f4a0d8e94d1ca3a1257b280'],
    descriptionContent: '5e8c82c020b7cf79d28e846c',
    experience: ['60b6f9d7a312e6e7fbb80d88'],
    education: ['60b6f9d7a312e6e7fbb80d87']
  },
  updateData: {
    titleName: '5e8c82c020b7cf79d28e846b',
    contacts: ['5f4a0d8e94d1ca3a1257b280'],
    descriptionContent: '5e8c82c020b7cf79d28e846c',
    experience: ['60b6f9d7a312e6e7fbb80d88'],
    education: ['60b6f9d7a312e6e7fbb80d87']
  }
}

describe('Resume Lifecycle', () => {
  it('should create a resume', async () => {
    const newResume = testData.createData

    const res = await chai
      .request(app)
      .post('/api/resumes')
      .send(newResume)
    expect(res).to.have.status(201)

    createdResumeId = newResume.id
  })

  it('should read resumes', async () => {
    const res = await chai
      .request(app)
      .get(`/api/resumes/${userId}`)
    expect(res).to.have.status(200)
    // eslint-disable-next-line no-unused-expressions
    expect(res).to.be.json
  })

  it('should update a resume', async () => {
    const updatedResume = testData.updateData

    const res = await chai
      .request(app)
      .patch(`/api/resumes/${createdResumeId}`)
      .send(updatedResume)
    expect(res).to.have.status(200)
    // eslint-disable-next-line no-unused-expressions
    expect(res).to.be.json
  })
  /*
    it('should delete the resume', async () => {
      const res = await chai
        .request(app)
        .delete(`/api/resumes/${createdResumeId}`)
      expect(res).to.have.status(200)
      // eslint-disable-next-line no-unused-expressions
      expect(res).to.be.json
    })
  */
})
