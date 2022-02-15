import { Entity } from "../../core/domain/Entity";

type ChallengeProps = {
  instructionsUrl: string;
  title: string;
}

export class Challenge extends Entity<ChallengeProps> {
  private constructor(props: ChallengeProps, id?: string) {
    super(props, id);
  }
  //estatico pq precisa ser chamado sem instanciar
  static create(props: ChallengeProps, id?: string) {
    const challenge = new Challenge(props, id);

    return challenge
  }
}