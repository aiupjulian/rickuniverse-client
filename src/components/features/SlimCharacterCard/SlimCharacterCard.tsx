import { Character } from "../../../services/character";
import Card from "../../common/Card";
import CharacterStatus from "../CharacterStatus";
import styles from "./SlimCharacterCard.module.css";
import { ReactComponent as HeartFilledIcon } from "../../../icons/heart-filled.svg";
import { ReactComponent as HeartOutlinedIcon } from "../../../icons/heart-outlined.svg";

type SlimCharacterCardProps = {
  character: Character;
};

export default function SlimCharacterCard({
  character,
}: SlimCharacterCardProps) {
  return (
    <Card>
      <div className={styles.container}>
        <img
          src={character.image}
          alt={character.name}
          className={styles.image}
        />
        <div className={styles.details}>
          <h1 className={styles.name}>{character.name}</h1>
          <CharacterStatus
            status={character.status}
            species={character.species}
          />
        </div>
        {character.fav ? (
          <HeartFilledIcon className={styles.heartIcon} />
        ) : (
          <HeartOutlinedIcon className={styles.heartIcon} />
        )}
      </div>
    </Card>
  );
}
