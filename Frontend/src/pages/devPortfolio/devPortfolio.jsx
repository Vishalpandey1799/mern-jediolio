import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Apicalls from "../../store/apicalls.js";
import { socialmedianameextractor } from "../../utils/Social.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as brandIcons from "@fortawesome/free-brands-svg-icons";
import toast from "react-hot-toast";

const DevPortfolio = () => {
  const { slug } = useParams();
  const { getUser, userData, newSlug } = Apicalls();
  const [social, setSocial] = useState([]);
  const navigate = useNavigate();

  function navigator() {
    if (newSlug) {
      navigate(`/user/portfolio/${newSlug}`);
    }
  }

  useEffect(() => {
    const fetchUserData = async () => {
      if (slug) {
        try {
          await getUser(slug);
        } catch (error) {
         
        }
      }
    };

    fetchUserData();
  }, [slug, getUser]);

  useEffect(() => {
    if (userData?.socialLinks) {
      const extractedSocial = userData.socialLinks
        .map((link) => {
          const platform = socialmedianameextractor(link);
          return platform ? { platform, link } : null;  
        })
        .filter((item) => item !== null);  
      setSocial(extractedSocial);
    }
  }, [userData]);

  const getPlatformIcon = (platform) => {
    const iconName = platform.toLowerCase();
    if (
      brandIcons[`fa${iconName.charAt(0).toUpperCase() + iconName.slice(1)}`]
    ) {
      return brandIcons[
        `fa${iconName.charAt(0).toUpperCase() + iconName.slice(1)}`
      ];
    }
    return platform.slice(0, 2).toUpperCase();
  };

  if (!userData) return null;

  return (
    <div
      className="flex h-[800px] items-center justify-center"
      onClick={navigator}
    >
      <div className="w-80 bg-white bg-opacity-90 rounded-2xl shadow-lg overflow-hidden mt-15">
        <div className="p-6 text-center bg-gradient-to-r from-blue-600 to-cyan-400">
          <img
            src={userData.profileImage}
            alt="Developer Profile"
            className="w-32 h-32 rounded-full border-4 border-white mx-auto shadow-lg"
          />
          <h1 className="text-white text-2xl font-bold mt-4">
            {userData.name}
          </h1>
          <span className="text-white bg-black bg-opacity-20 px-4 py-1 rounded-full text-sm font-medium inline-block mt-2">
            {userData.profession}
          </span>
        </div>
        <div className="p-6 text-center">
          <p className="text-gray-600 mb-4 text-sm">{userData.bio}</p>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {userData.skills?.map((skill) => (
              <span
                key={skill}
                className="bg-gray-200 px-3 py-1 rounded-full text-xs text-gray-700"
              >
                {skill}
              </span>
            ))}
          </div>

          <div>
            {social.length > 0 ? (
              <div className="mt-4 flex justify-center gap-6 flex-wrap align-middle">
                {social.map((socialMedia, index) => {
                  const platformIcon = getPlatformIcon(socialMedia.platform);
                  return (
                    <a
                      key={index}
                      href={socialMedia.link}
                      className="w-10 h-10 flex items-center justify-center rounded-full transition-transform transform hover:scale-105 shadow-md bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {typeof platformIcon === "string" ? (
                        <span className="text-white font-semibold text-xl">
                          {platformIcon}
                        </span>
                      ) : (
                        <FontAwesomeIcon
                          icon={platformIcon}
                          size="sm"
                          className="text-white"
                        />
                      )}
                    </a>
                  );
                })}
              </div>
            ) : (
              <p className="text-gray-500 mt-4">No social links available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevPortfolio;
