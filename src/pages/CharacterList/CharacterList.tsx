import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SlimCharacterCard from "../../components/features/SlimCharacterCard";
import SlimCharacterCardSkeleton from "../../components/features/SlimCharacterCard/SlimCharacterCardSkeleton";
import { Characters, getCharacters } from "../../services/character";
import { useAppSelector } from "../../store/hooks";
import { selectToken } from "../../store/slices/authSlice";
import styles from "./CharacterList.module.css";

export default function CharacterList() {
  const token = useAppSelector(selectToken);
  const [characters, setCharacters] = useState<Characters>();
  const [isLoadingCharacters, setIsLoadingCharacters] = useState(false);

  useEffect(() => {
    if (token && !isLoadingCharacters && !characters) {
      setIsLoadingCharacters(true);
      getCharacters(token).then((data) => {
        setCharacters(data);
        setIsLoadingCharacters(false);
      });
    }
  }, [token, isLoadingCharacters, characters]);

  return (
    <>
      <h1>Characters</h1>
      <ul className={styles.list}>
        {characters ? (
          characters?.results.map((character) => (
            <Link
              to={`/character/${character.id}`}
              key={character.id}
              className={styles.itemLink}
            >
              <SlimCharacterCard character={character} />
            </Link>
          ))
        ) : (
          <>
            <SlimCharacterCardSkeleton />
            <SlimCharacterCardSkeleton />
            <SlimCharacterCardSkeleton />
          </>
        )}
      </ul>
    </>
  );
}
