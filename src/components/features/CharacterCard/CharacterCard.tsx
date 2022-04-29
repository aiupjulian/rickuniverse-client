import { Character } from "../../../services/character";
import Card from "../../common/Card";
import CharacterStatus from "../CharacterStatus";
import styles from "./CharacterCard.module.css";
import { ReactComponent as HeartFilledIcon } from "../../../icons/heart-filled.svg";
import { ReactComponent as HeartOutlinedIcon } from "../../../icons/heart-outlined.svg";

type CharacterCardProps = {
  character: Character;
};

export default function CharacterCard({ character }: CharacterCardProps) {
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
          <div className={styles.detailItem}>
            <p className={styles.detailLabel}>Last known location:</p>
            <p className={styles.detailDescription}>
              {character.location.name}
            </p>
          </div>
          <div className={styles.detailItem}>
            <p className={styles.detailLabel}>Origin:</p>
            <p className={styles.detailDescription}>{character.origin.name}</p>
          </div>
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
