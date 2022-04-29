import { useState } from "react";
import { Character } from "../../../services/character";
import Card from "../../common/Card";
import CharacterStatus from "../CharacterStatus";
import styles from "./CharacterCard.module.css";
import { ReactComponent as HeartFilledIcon } from "../../../icons/heart-filled.svg";
import { ReactComponent as HeartOutlinedIcon } from "../../../icons/heart-outlined.svg";
import { useAppSelector } from "../../../store/hooks";
import { selectToken } from "../../../store/slices/authSlice";
import { addFav, removeFav } from "../../../services/user";

type CharacterCardProps = {
  character: Character;
};

export default function CharacterCard({ character }: CharacterCardProps) {
  const [fav, setFav] = useState(character.fav);
  const token = useAppSelector(selectToken);

  async function handleAddFavClick() {
    if (token) {
      try {
        await addFav(token, character.id);
        setFav(true);
      } catch {}
    }
  }
  async function handleRemoveFavClick() {
    if (token) {
      try {
        await removeFav(token, character.id);
        setFav(false);
      } catch {}
    }
  }

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
        {fav ? (
          <button onClick={handleRemoveFavClick} className={styles.heartIcon}>
            <HeartFilledIcon />
          </button>
        ) : (
          <button onClick={handleAddFavClick} className={styles.heartIcon}>
            <HeartOutlinedIcon />
          </button>
        )}
      </div>
    </Card>
  );
}
