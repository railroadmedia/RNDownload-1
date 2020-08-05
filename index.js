import Download from './src/Download';
import DownloadResources, { downloadRes } from './src/DownloadResources';

export { Download, DownloadResources, downloadRes };
export const mock = {
  comments: [
    {
      id: 132826,
      comment:
        "Delving into these paradiddle variations! Can't help but think about Mr. garibaldi! What a master!",
      content_id: 213233,
      parent_id: null,
      user_id: 310505,
      display_name: '',
      created_on: '2020-06-27 20:08:44',
      deleted_at: null,
      replies: [],
      like_count: 0,
      like_users: [],
      is_liked: false,
      user: {
        id: 310505,
        display_name: 'Pelle',
        'fields.profile_picture_image_url':
          'https://s3.amazonaws.com/pianote/defaults/avatar.png',
        xp: 0,
        xp_level: 'Enthusiast I',
        access_level: 'pack',
        level_number: '1.0',
        isAdmin: false
      }
    },
    {
      id: 110052,
      comment: 'Nice hand technique. Thanks for sharing',
      content_id: 213233,
      parent_id: null,
      user_id: 337857,
      display_name: '',
      created_on: '2020-01-31 15:40:57',
      deleted_at: null,
      replies: [],
      like_count: 0,
      like_users: [],
      is_liked: false,
      user: {
        id: 337857,
        display_name: 'Tex',
        'fields.profile_picture_image_url':
          'https://dzryyo1we6bm3.cloudfront.net/avatars/172767_1563834924616.jpg',
        xp: 0,
        xp_level: 'Enthusiast I',
        access_level: 'edge',
        level_number: '1.0',
        isAdmin: false
      }
    },
    {
      id: 60093,
      comment:
        'Brilliant!!! I finally see the unlimited potential of the Paradiddles. I never paid enough attention to the accents. Now, I get it!! So happy ',
      content_id: 213233,
      parent_id: null,
      user_id: 315796,
      display_name: '',
      created_on: '2018-11-25 11:22:00',
      deleted_at: null,
      replies: [
        {
          id: 60277,
          content_id: 213233,
          comment:
            'You can definitely get a lot of milage out of paraddidles. :) ',
          parent_id: 60093,
          user_id: 102905,
          display_name: '',
          created_on: '2018-11-26 22:52:55',
          deleted_at: null,
          like_count: 0,
          like_users: [],
          is_liked: false,
          user: {
            display_name: 'Reuben Spyker',
            xp: 0,
            xp_level: 'Enthusiast I',
            access_level: 'team',
            'fields.profile_picture_image_url':
              'https://dzryyo1we6bm3.cloudfront.net/avatars/102905_1540571731445.jpg',
            level_number: '1.0',
            isAdmin: true
          }
        }
      ],
      like_count: 1,
      like_users: [
        {
          id: 102905,
          display_name: 'Reuben Spyker',
          avatar_url:
            'https://dzryyo1we6bm3.cloudfront.net/avatars/102905_1540571731445.jpg',
          xp: 0
        }
      ],
      is_liked: false,
      user: {
        id: 315796,
        display_name: 'cynthiarmstrong',
        'fields.profile_picture_image_url':
          'https://drumeo-user-avatars.s3-us-west-2.amazonaws.com/150270_avatar_url_1503885409.jpg',
        xp: 0,
        xp_level: 'Enthusiast I',
        access_level: 'edge',
        level_number: '1.0',
        isAdmin: false
      }
    }
  ],
  id: 213233,
  xp: 150,
  refreshing: false,
  showInfo: false,
  type: 'PACK-BUNDLE-LESSON',
  style: '',
  title: 'Paradiddle Family',
  xpBonus: 150,
  url:
    'https://staging.drumeo.com/laravel/public/api/members/pack/lesson/213233',
  artist: '',
  videoId: '273408126',
  likeCount: 9,
  captions: '',
  progress: 0,
  resources: null,
  instructor: '',
  difficulty: 'ADVANCED all',
  releaseDate: 'SEP 25, 2018',
  parentTitle: '',
  lengthInSec: '1271',
  instructors: [],
  description: 'This is an introduction to the paradiddle family of rudiments.',
  assignments: [
    {
      id: 210477,
      xp: 25,
      index: 0,
      progress: 0,
      title: '#1',
      description: '',
      soundsliceSlug: '170400',
      sheets: [
        {
          value: 'https://d1923uyy6spedc.cloudfront.net/ex1p-sp.svg',
          id: 67616,
          whRatio: 8.962962962962964
        }
      ],
      timeCodes: []
    },
    {
      id: 210478,
      xp: 25,
      index: 1,
      progress: 0,
      title: 'Check Pattern',
      description: '',
      soundsliceSlug: '170401',
      sheets: [
        {
          value: 'https://d1923uyy6spedc.cloudfront.net/ex2p-check.svg',
          id: 67619,
          whRatio: 9.490196078431373
        }
      ],
      timeCodes: []
    },
    {
      id: 210479,
      xp: 25,
      index: 2,
      progress: 0,
      title: '#1',
      description: '',
      soundsliceSlug: '170402',
      sheets: [
        {
          value: 'https://d1923uyy6spedc.cloudfront.net/ex3p-dp.svg',
          id: 67622,
          whRatio: 9.307692307692308
        }
      ],
      timeCodes: []
    },
    {
      id: 210480,
      xp: 25,
      index: 3,
      progress: 0,
      title: '#2',
      description: '',
      soundsliceSlug: '170403',
      sheets: [
        {
          value: 'https://d1923uyy6spedc.cloudfront.net/ex4p-dp.svg',
          id: 67625,
          whRatio: 9.132075471698114
        }
      ],
      timeCodes: []
    },
    {
      id: 210481,
      xp: 25,
      index: 4,
      progress: 0,
      title: '#1',
      description: '',
      soundsliceSlug: '170404',
      sheets: [
        {
          value: 'https://d1923uyy6spedc.cloudfront.net/ex5p-tp.svg',
          id: 67628,
          whRatio: 9.132075471698114
        }
      ],
      timeCodes: []
    },
    {
      id: 210482,
      xp: 25,
      index: 5,
      progress: 0,
      title: '#2',
      description: '',
      soundsliceSlug: '170405',
      sheets: [
        {
          value: 'https://d1923uyy6spedc.cloudfront.net/ex6p-tp.svg',
          id: 67631,
          whRatio: 9.307692307692308
        }
      ],
      timeCodes: []
    },
    {
      id: 210484,
      xp: 25,
      index: 6,
      progress: 0,
      title: 'Single Paradiddle Variation',
      description: '',
      soundsliceSlug: '170408',
      sheets: [
        {
          value: 'https://d1923uyy6spedc.cloudfront.net/ex8p.svg',
          id: 67637,
          whRatio: 9.307692307692308
        }
      ],
      timeCodes: []
    },
    {
      id: 210485,
      xp: 25,
      index: 7,
      progress: 0,
      title: 'Double Paradiddle Variation',
      description: '',
      soundsliceSlug: '170409',
      sheets: [
        {
          value: 'https://d1923uyy6spedc.cloudfront.net/ex9p.svg',
          id: 67640,
          whRatio: 9.307692307692308
        }
      ],
      timeCodes: []
    },
    {
      id: 210487,
      xp: 25,
      index: 8,
      progress: 0,
      title: 'Triple Paradiddle Variation',
      description: '',
      soundsliceSlug: '170410',
      sheets: [
        {
          value: 'https://d1923uyy6spedc.cloudfront.net/ex10p.svg',
          id: 67643,
          whRatio: 9.307692307692308
        }
      ],
      timeCodes: []
    },
    {
      id: 210488,
      xp: 25,
      index: 9,
      progress: 0,
      title: 'Paradiddle Variation Combination',
      description: '',
      soundsliceSlug: '170411',
      sheets: [
        {
          value: 'https://d1923uyy6spedc.cloudfront.net/ex11p-check.svg',
          id: 67646,
          whRatio: 8.962962962962964
        }
      ],
      timeCodes: []
    },
    {
      id: 210483,
      xp: 25,
      index: 10,
      progress: 0,
      title: 'Paradiddle Combination',
      description: '',
      soundsliceSlug: '170406',
      sheets: [
        {
          value: 'https://d1923uyy6spedc.cloudfront.net/ex7p-check.svg',
          id: 67634,
          whRatio: 9.490196078431373
        }
      ],
      timeCodes: []
    },
    {
      id: 210489,
      xp: 25,
      index: 11,
      progress: 0,
      title: '#1',
      description: '',
      soundsliceSlug: '170412',
      sheets: [
        {
          value: 'https://d1923uyy6spedc.cloudfront.net/ex12p.svg',
          id: 67649,
          whRatio: 9.307692307692308
        }
      ],
      timeCodes: []
    },
    {
      id: 210491,
      xp: 25,
      index: 12,
      progress: 0,
      title: '#2',
      description: '',
      soundsliceSlug: '170413',
      sheets: [
        {
          value: 'https://d1923uyy6spedc.cloudfront.net/ex13p.svg',
          id: 67652,
          whRatio: 9.307692307692308
        }
      ],
      timeCodes: []
    },
    {
      id: 210492,
      xp: 25,
      index: 13,
      progress: 0,
      title: 'Check Pattern',
      description: '',
      soundsliceSlug: '170414',
      sheets: [
        {
          value: 'https://d1923uyy6spedc.cloudfront.net/ex14p-check.svg',
          id: 67655,
          whRatio: 7.5625
        }
      ],
      timeCodes: []
    },
    {
      id: 210493,
      xp: 25,
      index: 14,
      progress: 0,
      title: 'Paradiddle-Diddle Combination',
      description: '',
      soundsliceSlug: '170415',
      sheets: [
        {
          value: 'https://d1923uyy6spedc.cloudfront.net/ex15p---check.svg',
          id: 67658,
          whRatio: 9.68
        }
      ],
      timeCodes: []
    }
  ],
  mp3s: [],
  thumbnailUrl:
    'https://dzryyo1we6bm3.cloudfront.net/hudson-packs/great-hands-for-a-lifetime/ghfal-33-paradiddle-family.jpg',
  isYoutube: false,
  soundsliceSlug: '170400',
  relatedLessons: '',
  isAdded: true,
  parentBundleUrl:
    'https://staging.drumeo.com/laravel/public/api/members/pack/bundle/213249',
  video_playback_endpoints: [
    {
      file:
        'https://player.vimeo.com/external/273408126.sd.mp4?s=92291a47f00f43e7ca98ebdf7f1c88e3c10d0b32&profile_id=164&oauth2_token_id=1284792283',
      width: 640,
      height: 360
    },
    {
      file:
        'https://player.vimeo.com/external/273408126.sd.mp4?s=92291a47f00f43e7ca98ebdf7f1c88e3c10d0b32&profile_id=165&oauth2_token_id=1284792283',
      width: 960,
      height: 540
    }
  ],
  lastWatchedPosInSec: 0,
  parentBundleCount: 5
};
