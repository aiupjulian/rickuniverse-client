import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CharacterCard from "../../components/features/CharacterCard";
import { Character, getCharacter } from "../../services/character";
import { useAppSelector } from "../../store/hooks";
import { selectToken } from "../../store/slices/authSlice";
import { ReactComponent as CaretLeftIcon } from "../../icons/caret-left.svg";
import styles from "./CharacterDetail.module.css";

export default function CharacterDetail() {
  let { characterId } = useParams<"characterId">();
  const token = useAppSelector(selectToken);
  const [character, setCharacter] = useState<Character>();
  const [isLoadingCharacter, setIsLoadingCharacter] = useState(false);

  useEffect(() => {
    if (token && characterId && !isLoadingCharacter && !character) {
      setIsLoadingCharacter(true);
      getCharacter(token, characterId).then((data) => {
        setCharacter(data);
        setIsLoadingCharacter(false);
      });
    }
  }, [token, characterId, isLoadingCharacter, character]);

  if (!character) {
    return null;
  }

  return (
    <>
      <Link to="/character" className={styles.listLink}>
        <CaretLeftIcon className={styles.caretIcon} />
        Back to list
      </Link>
      <CharacterCard character={character} />
    </>
  );
}
