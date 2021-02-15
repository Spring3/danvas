import { useEffect, useState } from 'react';
import { useImagePreload } from './useImagePreload';

const useGithubData = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [githubProfile, setGithubProfile] = useState({});

  useEffect(() => {
    let isMounted = true;
    const fetchGithubProfile = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Spring3');
        const data = await response.json();
        if (isMounted) {
          setGithubProfile(data);
        }
      } catch (error) {
        console.error('Error when fetching profile data from github', error);
      } finally {
        if (isMounted) {
          setIsFetching(false);
        }
      }
    };

    setIsFetching(true);
    fetchGithubProfile();

    return () => {
      isMounted = false;
    };
  }, []);

  useImagePreload(githubProfile?.avatar_url);

  return {
    isFetching,
    data: githubProfile
  };
};

export {
  useGithubData
};
