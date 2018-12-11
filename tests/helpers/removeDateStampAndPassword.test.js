import chaiHttp from 'chai-http';
import chai, { expect } from 'chai';
import UserFactory from '../mock/userFactory';
import removeDateStampAndPassword from
'../../server/helpers/removeDateStampAndPassword';

const userObject = UserFactory.build();
const strippedUser = removeDateStampAndPassword(userObject);
const invalidUserObject = removeDateStampAndPassword(5);

chai.use(chaiHttp);

describe('Function to strip user object of password and timestamps', () => {
  it('should return a valid user object', () => {
    expect(strippedUser).to.be.an('object');
  });

  it('should not accept not accept invalid data', () => {
    expect(invalidUserObject).to.equal('Please enter a valid user object');
  });

  it('should not contain the password property', () => {
    expect(strippedUser).to.not.have.property('password');
  });

  it('should not contain the updatedAt property', () => {
    expect(strippedUser).to.not.have.property('updatedAt');
  });

  it('should not contain the createdAt property', () => {
    expect(strippedUser).to.not.have.property('createdAt');
  });
});