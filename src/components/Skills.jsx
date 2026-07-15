import { useEffect, useState } from 'react';
import axios from 'axios';

export const Skills = () => {
  const [languageList, setLanguageList] = useState([]);
  console.log(languageList);

  useEffect(() => {
    axios.get('https://api.github.com/users/tenhiroaki123-ship-it/repos')
      .then((response) => {
        const languageList = response.data.map(res => res.language);
        const countedLanguageList = generateLanguageCountObj(languageList);
        setLanguageList(countedLanguageList);
      });
  }, []);

  const generateLanguageCountObj = (allLanguageList) => {
    const notNullLanguageList = allLanguageList.filter(language => language != null);
    const uniqueLanguageList = [...new Set(notNullLanguageList)];

    return uniqueLanguageList.map(item => {
      return {
        language: item,
        count: allLanguageList.filter(language => language === item).length
      }
    });
  };

  // 省略
};
