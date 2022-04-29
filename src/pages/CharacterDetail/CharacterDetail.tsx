import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Character, getCharacter } from "../../services/character";
import { useAppSelector } from "../../store/hooks";
import { selectToken } from "../../store/slices/authSlice";

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

  return <h1>{character?.name}</h1>;
}