import { Character } from "../../../services/character";
import styles from "./CharacterStatus.module.css";

type CharacterStatusProps = {
  status: Character["status"];
  species: Character["species"];
};

const statusColorMap: { [key in string]: string } = {
  Alive: styles.statusAlive,
  Dead: styles.statusDead,
  default: styles.statusDefault,
};

export default function CharacterStatus({
  status,
  species,
}: CharacterStatusProps) {
  return (
    <div className={styles.container}>
      <div
        className={`${styles.statusDot} ${
          statusColorMap[status] || statusColorMap.default
        }`}
      />
      {status} - {species}
    </div>
  );
}
