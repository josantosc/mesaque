type UseVerseReturnType = {
  title: string;
  verse: string;
};

export const useVerse = (): UseVerseReturnType => {
  const title = "Mateus 6:33";
  const verse =
    "Busquem, pois, em primeiro lugar o Reino de Deus e a sua justiça, e todas essas coisas lhes serão acrescentadas.";

  return { title, verse };
};
