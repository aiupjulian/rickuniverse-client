import { Character } from "../../../services/character";
import Card from "../../common/Card";

type CharacterCardProps = {
  character: Character;
};

export default function CharacterCard({ character }: CharacterCardProps) {
  return <Card>{character.name}</Card>;
}
