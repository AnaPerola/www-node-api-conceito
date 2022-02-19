import { Challenge } from "../../domain/entities/challenge";
import { Student } from "../../domain/entities/student";

import { InMemoryChallengesRepository } from "../../tests/repositories/in-memory-challenges-repository";
import { InMemoryStudentsRepository } from "../../tests/repositories/in-memory-students-repository";

import { CreateChallengeSubmission } from "./create-challenge-submission";

describe('Create challenge submission use case', () => {
  it('should be able to create a new challenge submission', async() => {
    const studentsRepository = new InMemoryStudentsRepository();
    const challengesRepository = new InMemoryChallengesRepository();

    const student = Student.create({
      name: 'Ana',
      email: 'ana@example.com',
    })

    const challenge = Challenge.create({
      title: 'Challenge 01',
      instructionsUrl: 'http://example.com'
    })

    studentsRepository.items.push(student);
    challengesRepository.items.push(challenge);
    
    const sut = new CreateChallengeSubmission(
      studentsRepository,
      challengesRepository,
    );

    const response = await sut.execute({
      studentId: 'fake-student-id',
      challengeId: 'fake-challent-id',
    })
    expect(response).toBeTruthy();
  })
})