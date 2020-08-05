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
export const mockExtended = {
  id: 213233,
  slug: 'paradiddle-family',
  type: 'pack-bundle-lesson',
  sort: 0,
  status: 'published',
  language: 'en-US',
  brand: 'drumeo',
  total_xp: 150,
  published_on: '2018-09-25 18:59:31',
  created_on: '2018-09-25 18:59:31',
  archived_on: null,
  parent_id: null,
  child_id: null,
  fields: [
    {
      id: 242122,
      content_id: 213233,
      key: 'title',
      value: 'Paradiddle Family',
      type: 'string',
      position: 1
    },
    {
      id: 242123,
      content_id: 213233,
      key: 'exercise_id',
      value: {
        id: 210477,
        slug: '-sharp1',
        type: 'assignment',
        sort: 0,
        status: 'published',
        language: 'en-US',
        brand: 'drumeo',
        total_xp: null,
        published_on: '2018-10-10 19:00:00',
        created_on: '2018-08-01 16:38:22',
        archived_on: null,
        parent_id: null,
        child_id: null,
        fields: [
          {
            id: 235683,
            content_id: 210477,
            key: 'title',
            value: '#1',
            type: 'string',
            position: 1
          },
          {
            id: 235684,
            content_id: 210477,
            key: 'soundslice_slug',
            value: '170400',
            type: 'string',
            position: 1
          }
        ],
        data: [
          {
            id: 67615,
            content_id: 210477,
            key: 'soundslice_xml_file_url',
            value: 'https://d1923uyy6spedc.cloudfront.net/ex1-sp.musicxml',
            position: 1
          },
          {
            id: 67616,
            content_id: 210477,
            key: 'sheet_music_image_url',
            value: 'https://d1923uyy6spedc.cloudfront.net/ex1p-sp.svg',
            position: 1
          }
        ],
        permissions: []
      },
      type: 'content',
      position: 1
    },
    {
      id: 242127,
      content_id: 213233,
      key: 'video',
      value: {
        id: 213234,
        slug: 'vimeo-video-273408126',
        type: 'vimeo-video',
        sort: 0,
        status: 'published',
        language: 'en-US',
        brand: 'drumeo',
        total_xp: null,
        published_on: '2018-09-25 18:59:31',
        created_on: '2018-09-25 18:59:31',
        archived_on: null,
        parent_id: null,
        child_id: null,
        fields: [
          {
            id: 242125,
            content_id: 213234,
            key: 'vimeo_video_id',
            value: '273408126',
            type: 'string',
            position: 1
          },
          {
            id: 242126,
            content_id: 213234,
            key: 'length_in_seconds',
            value: '1271',
            type: 'integer',
            position: 1
          }
        ],
        data: [],
        permissions: []
      },
      type: 'content',
      position: 1
    },
    {
      id: 242124,
      content_id: 213233,
      key: 'exercise_id',
      value: {
        id: 210478,
        slug: 'check-pattern',
        type: 'assignment',
        sort: 0,
        status: 'published',
        language: 'en-US',
        brand: 'drumeo',
        total_xp: null,
        published_on: '2018-10-10 19:00:00',
        created_on: '2018-08-01 16:40:42',
        archived_on: null,
        parent_id: null,
        child_id: null,
        fields: [
          {
            id: 235685,
            content_id: 210478,
            key: 'title',
            value: 'Check Pattern',
            type: 'string',
            position: 1
          },
          {
            id: 235686,
            content_id: 210478,
            key: 'soundslice_slug',
            value: '170401',
            type: 'string',
            position: 1
          }
        ],
        data: [
          {
            id: 67618,
            content_id: 210478,
            key: 'soundslice_xml_file_url',
            value: 'https://d1923uyy6spedc.cloudfront.net/ex2-check.musicxml',
            position: 1
          },
          {
            id: 67619,
            content_id: 210478,
            key: 'sheet_music_image_url',
            value: 'https://d1923uyy6spedc.cloudfront.net/ex2p-check.svg',
            position: 1
          }
        ],
        permissions: []
      },
      type: 'content',
      position: 2
    },
    {
      id: 244550,
      content_id: 213233,
      key: 'exercise_id',
      value: {
        id: 210479,
        slug: '-sharp1',
        type: 'assignment',
        sort: 0,
        status: 'published',
        language: 'en-US',
        brand: 'drumeo',
        total_xp: null,
        published_on: '2018-10-02 19:00:00',
        created_on: '2018-08-01 16:43:20',
        archived_on: null,
        parent_id: null,
        child_id: null,
        fields: [
          {
            id: 235687,
            content_id: 210479,
            key: 'title',
            value: '#1',
            type: 'string',
            position: 1
          },
          {
            id: 235688,
            content_id: 210479,
            key: 'soundslice_slug',
            value: '170402',
            type: 'string',
            position: 1
          }
        ],
        data: [
          {
            id: 67621,
            content_id: 210479,
            key: 'soundslice_xml_file_url',
            value: 'https://d1923uyy6spedc.cloudfront.net/ex3-dp.musicxml',
            position: 1
          },
          {
            id: 67622,
            content_id: 210479,
            key: 'sheet_music_image_url',
            value: 'https://d1923uyy6spedc.cloudfront.net/ex3p-dp.svg',
            position: 1
          }
        ],
        permissions: []
      },
      type: 'content',
      position: 3
    },
    {
      id: 244551,
      content_id: 213233,
      key: 'exercise_id',
      value: {
        id: 210480,
        slug: '-sharp2',
        type: 'assignment',
        sort: 0,
        status: 'published',
        language: 'en-US',
        brand: 'drumeo',
        total_xp: null,
        published_on: '2018-10-02 19:00:00',
        created_on: '2018-08-01 16:44:52',
        archived_on: null,
        parent_id: null,
        child_id: null,
        fields: [
          {
            id: 235689,
            content_id: 210480,
            key: 'title',
            value: '#2',
            type: 'string',
            position: 1
          },
          {
            id: 235690,
            content_id: 210480,
            key: 'soundslice_slug',
            value: '170403',
            type: 'string',
            position: 1
          }
        ],
        data: [
          {
            id: 67624,
            content_id: 210480,
            key: 'soundslice_xml_file_url',
            value: 'https://d1923uyy6spedc.cloudfront.net/ex4-dp.musicxml',
            position: 1
          },
          {
            id: 67625,
            content_id: 210480,
            key: 'sheet_music_image_url',
            value: 'https://d1923uyy6spedc.cloudfront.net/ex4p-dp.svg',
            position: 1
          }
        ],
        permissions: []
      },
      type: 'content',
      position: 4
    },
    {
      id: 244552,
      content_id: 213233,
      key: 'exercise_id',
      value: {
        id: 210481,
        slug: '-sharp1',
        type: 'assignment',
        sort: 0,
        status: 'published',
        language: 'en-US',
        brand: 'drumeo',
        total_xp: null,
        published_on: '2018-10-02 19:00:00',
        created_on: '2018-08-01 16:46:58',
        archived_on: null,
        parent_id: null,
        child_id: null,
        fields: [
          {
            id: 235691,
            content_id: 210481,
            key: 'title',
            value: '#1',
            type: 'string',
            position: 1
          },
          {
            id: 235692,
            content_id: 210481,
            key: 'soundslice_slug',
            value: '170404',
            type: 'string',
            position: 1
          }
        ],
        data: [
          {
            id: 67627,
            content_id: 210481,
            key: 'soundslice_xml_file_url',
            value: 'https://d1923uyy6spedc.cloudfront.net/ex5-tp.musicxml',
            position: 1
          },
          {
            id: 67628,
            content_id: 210481,
            key: 'sheet_music_image_url',
            value: 'https://d1923uyy6spedc.cloudfront.net/ex5p-tp.svg',
            position: 1
          }
        ],
        permissions: []
      },
      type: 'content',
      position: 5
    },
    {
      id: 244553,
      content_id: 213233,
      key: 'exercise_id',
      value: {
        id: 210482,
        slug: '-sharp2',
        type: 'assignment',
        sort: 0,
        status: 'published',
        language: 'en-US',
        brand: 'drumeo',
        total_xp: null,
        published_on: '2018-10-02 19:00:00',
        created_on: '2018-08-01 16:48:32',
        archived_on: null,
        parent_id: null,
        child_id: null,
        fields: [
          {
            id: 235693,
            content_id: 210482,
            key: 'title',
            value: '#2',
            type: 'string',
            position: 1
          },
          {
            id: 235694,
            content_id: 210482,
            key: 'soundslice_slug',
            value: '170405',
            type: 'string',
            position: 1
          }
        ],
        data: [
          {
            id: 67630,
            content_id: 210482,
            key: 'soundslice_xml_file_url',
            value: 'https://d1923uyy6spedc.cloudfront.net/ex6-tp.musicxml',
            position: 1
          },
          {
            id: 67631,
            content_id: 210482,
            key: 'sheet_music_image_url',
            value: 'https://d1923uyy6spedc.cloudfront.net/ex6p-tp.svg',
            position: 1
          }
        ],
        permissions: []
      },
      type: 'content',
      position: 6
    },
    {
      id: 244554,
      content_id: 213233,
      key: 'exercise_id',
      value: {
        id: 210484,
        slug: 'single-paradiddle-variation',
        type: 'assignment',
        sort: 0,
        status: 'published',
        language: 'en-US',
        brand: 'drumeo',
        total_xp: null,
        published_on: '2018-10-02 19:00:00',
        created_on: '2018-08-01 16:55:34',
        archived_on: null,
        parent_id: null,
        child_id: null,
        fields: [
          {
            id: 235697,
            content_id: 210484,
            key: 'title',
            value: 'Single Paradiddle Variation',
            type: 'string',
            position: 1
          },
          {
            id: 235698,
            content_id: 210484,
            key: 'soundslice_slug',
            value: '170408',
            type: 'string',
            position: 1
          }
        ],
        data: [
          {
            id: 67636,
            content_id: 210484,
            key: 'soundslice_xml_file_url',
            value: 'https://d1923uyy6spedc.cloudfront.net/ex8.musicxml',
            position: 1
          },
          {
            id: 67637,
            content_id: 210484,
            key: 'sheet_music_image_url',
            value: 'https://d1923uyy6spedc.cloudfront.net/ex8p.svg',
            position: 1
          }
        ],
        permissions: []
      },
      type: 'content',
      position: 7
    },
    {
      id: 244555,
      content_id: 213233,
      key: 'exercise_id',
      value: {
        id: 210485,
        slug: 'double-paradiddle-variation',
        type: 'assignment',
        sort: 0,
        status: 'published',
        language: 'en-US',
        brand: 'drumeo',
        total_xp: null,
        published_on: '2018-10-02 19:00:00',
        created_on: '2018-08-01 16:56:56',
        archived_on: null,
        parent_id: null,
        child_id: null,
        fields: [
          {
            id: 235699,
            content_id: 210485,
            key: 'title',
            value: 'Double Paradiddle Variation',
            type: 'string',
            position: 1
          },
          {
            id: 235700,
            content_id: 210485,
            key: 'soundslice_slug',
            value: '170409',
            type: 'string',
            position: 1
          }
        ],
        data: [
          {
            id: 67639,
            content_id: 210485,
            key: 'soundslice_xml_file_url',
            value: 'https://d1923uyy6spedc.cloudfront.net/ex9.musicxml',
            position: 1
          },
          {
            id: 67640,
            content_id: 210485,
            key: 'sheet_music_image_url',
            value: 'https://d1923uyy6spedc.cloudfront.net/ex9p.svg',
            position: 1
          }
        ],
        permissions: []
      },
      type: 'content',
      position: 8
    },
    {
      id: 244556,
      content_id: 213233,
      key: 'exercise_id',
      value: {
        id: 210487,
        slug: 'triple-paradiddle-variation',
        type: 'assignment',
        sort: 0,
        status: 'published',
        language: 'en-US',
        brand: 'drumeo',
        total_xp: null,
        published_on: '2018-10-02 19:00:00',
        created_on: '2018-08-01 16:59:11',
        archived_on: null,
        parent_id: null,
        child_id: null,
        fields: [
          {
            id: 235701,
            content_id: 210487,
            key: 'title',
            value: 'Triple Paradiddle Variation',
            type: 'string',
            position: 1
          },
          {
            id: 235702,
            content_id: 210487,
            key: 'soundslice_slug',
            value: '170410',
            type: 'string',
            position: 1
          }
        ],
        data: [
          {
            id: 67642,
            content_id: 210487,
            key: 'soundslice_xml_file_url',
            value: 'https://d1923uyy6spedc.cloudfront.net/ex10p.musicxml',
            position: 1
          },
          {
            id: 67643,
            content_id: 210487,
            key: 'sheet_music_image_url',
            value: 'https://d1923uyy6spedc.cloudfront.net/ex10p.svg',
            position: 1
          }
        ],
        permissions: []
      },
      type: 'content',
      position: 9
    },
    {
      id: 244557,
      content_id: 213233,
      key: 'exercise_id',
      value: {
        id: 210488,
        slug: 'paradiddle-variation-combination',
        type: 'assignment',
        sort: 0,
        status: 'published',
        language: 'en-US',
        brand: 'drumeo',
        total_xp: null,
        published_on: '2018-10-02 19:00:00',
        created_on: '2018-08-01 17:01:50',
        archived_on: null,
        parent_id: null,
        child_id: null,
        fields: [
          {
            id: 235703,
            content_id: 210488,
            key: 'title',
            value: 'Paradiddle Variation Combination',
            type: 'string',
            position: 1
          },
          {
            id: 235704,
            content_id: 210488,
            key: 'soundslice_slug',
            value: '170411',
            type: 'string',
            position: 1
          }
        ],
        data: [
          {
            id: 67645,
            content_id: 210488,
            key: 'soundslice_xml_file_url',
            value: 'https://d1923uyy6spedc.cloudfront.net/ex11p.musicxml',
            position: 1
          },
          {
            id: 67646,
            content_id: 210488,
            key: 'sheet_music_image_url',
            value: 'https://d1923uyy6spedc.cloudfront.net/ex11p-check.svg',
            position: 1
          }
        ],
        permissions: []
      },
      type: 'content',
      position: 10
    },
    {
      id: 244558,
      content_id: 213233,
      key: 'exercise_id',
      value: {
        id: 210483,
        slug: 'paradiddle-combination',
        type: 'assignment',
        sort: 0,
        status: 'published',
        language: 'en-US',
        brand: 'drumeo',
        total_xp: null,
        published_on: '2018-10-09 19:00:00',
        created_on: '2018-08-01 16:50:52',
        archived_on: null,
        parent_id: null,
        child_id: null,
        fields: [
          {
            id: 235695,
            content_id: 210483,
            key: 'title',
            value: 'Paradiddle Combination',
            type: 'string',
            position: 1
          },
          {
            id: 235696,
            content_id: 210483,
            key: 'soundslice_slug',
            value: '170406',
            type: 'string',
            position: 1
          }
        ],
        data: [
          {
            id: 67633,
            content_id: 210483,
            key: 'soundslice_xml_file_url',
            value: 'https://d1923uyy6spedc.cloudfront.net/ex7-check.musicxml',
            position: 1
          },
          {
            id: 67634,
            content_id: 210483,
            key: 'sheet_music_image_url',
            value: 'https://d1923uyy6spedc.cloudfront.net/ex7p-check.svg',
            position: 1
          }
        ],
        permissions: []
      },
      type: 'content',
      position: 11
    },
    {
      id: 244559,
      content_id: 213233,
      key: 'exercise_id',
      value: {
        id: 210489,
        slug: '-sharp1',
        type: 'assignment',
        sort: 0,
        status: 'published',
        language: 'en-US',
        brand: 'drumeo',
        total_xp: null,
        published_on: '2018-10-01 19:00:00',
        created_on: '2018-08-01 17:05:07',
        archived_on: null,
        parent_id: null,
        child_id: null,
        fields: [
          {
            id: 235705,
            content_id: 210489,
            key: 'title',
            value: '#1',
            type: 'string',
            position: 1
          },
          {
            id: 235706,
            content_id: 210489,
            key: 'soundslice_slug',
            value: '170412',
            type: 'string',
            position: 1
          }
        ],
        data: [
          {
            id: 67648,
            content_id: 210489,
            key: 'soundslice_xml_file_url',
            value: 'https://d1923uyy6spedc.cloudfront.net/ex12p.musicxml',
            position: 1
          },
          {
            id: 67649,
            content_id: 210489,
            key: 'sheet_music_image_url',
            value: 'https://d1923uyy6spedc.cloudfront.net/ex12p.svg',
            position: 1
          }
        ],
        permissions: []
      },
      type: 'content',
      position: 12
    },
    {
      id: 244560,
      content_id: 213233,
      key: 'exercise_id',
      value: {
        id: 210491,
        slug: '-sharp2',
        type: 'assignment',
        sort: 0,
        status: 'published',
        language: 'en-US',
        brand: 'drumeo',
        total_xp: null,
        published_on: '2018-10-02 19:00:00',
        created_on: '2018-08-01 17:08:46',
        archived_on: null,
        parent_id: null,
        child_id: null,
        fields: [
          {
            id: 235707,
            content_id: 210491,
            key: 'title',
            value: '#2',
            type: 'string',
            position: 1
          },
          {
            id: 235708,
            content_id: 210491,
            key: 'soundslice_slug',
            value: '170413',
            type: 'string',
            position: 1
          }
        ],
        data: [
          {
            id: 67651,
            content_id: 210491,
            key: 'soundslice_xml_file_url',
            value: 'https://d1923uyy6spedc.cloudfront.net/ex13p.musicxml',
            position: 1
          },
          {
            id: 67652,
            content_id: 210491,
            key: 'sheet_music_image_url',
            value: 'https://d1923uyy6spedc.cloudfront.net/ex13p.svg',
            position: 1
          }
        ],
        permissions: []
      },
      type: 'content',
      position: 13
    },
    {
      id: 244561,
      content_id: 213233,
      key: 'exercise_id',
      value: {
        id: 210492,
        slug: 'check-pattern',
        type: 'assignment',
        sort: 0,
        status: 'published',
        language: 'en-US',
        brand: 'drumeo',
        total_xp: null,
        published_on: '2018-10-01 19:00:00',
        created_on: '2018-08-01 17:11:16',
        archived_on: null,
        parent_id: null,
        child_id: null,
        fields: [
          {
            id: 235709,
            content_id: 210492,
            key: 'title',
            value: 'Check Pattern',
            type: 'string',
            position: 1
          },
          {
            id: 235710,
            content_id: 210492,
            key: 'soundslice_slug',
            value: '170414',
            type: 'string',
            position: 1
          }
        ],
        data: [
          {
            id: 67654,
            content_id: 210492,
            key: 'soundslice_xml_file_url',
            value: 'https://d1923uyy6spedc.cloudfront.net/ex14p.musicxml',
            position: 1
          },
          {
            id: 67655,
            content_id: 210492,
            key: 'sheet_music_image_url',
            value: 'https://d1923uyy6spedc.cloudfront.net/ex14p-check.svg',
            position: 1
          }
        ],
        permissions: []
      },
      type: 'content',
      position: 14
    },
    {
      id: 244562,
      content_id: 213233,
      key: 'exercise_id',
      value: {
        id: 210493,
        slug: 'paradiddle-diddle-combination',
        type: 'assignment',
        sort: 0,
        status: 'published',
        language: 'en-US',
        brand: 'drumeo',
        total_xp: null,
        published_on: '2018-10-01 19:00:00',
        created_on: '2018-08-01 17:19:15',
        archived_on: null,
        parent_id: null,
        child_id: null,
        fields: [
          {
            id: 235711,
            content_id: 210493,
            key: 'title',
            value: 'Paradiddle-Diddle Combination',
            type: 'string',
            position: 1
          },
          {
            id: 235712,
            content_id: 210493,
            key: 'soundslice_slug',
            value: '170415',
            type: 'string',
            position: 1
          }
        ],
        data: [
          {
            id: 67657,
            content_id: 210493,
            key: 'soundslice_xml_file_url',
            value: 'https://d1923uyy6spedc.cloudfront.net/ex15p.musicxml',
            position: 1
          },
          {
            id: 67658,
            content_id: 210493,
            key: 'sheet_music_image_url',
            value: 'https://d1923uyy6spedc.cloudfront.net/ex15p---check.svg',
            position: 1
          }
        ],
        permissions: []
      },
      type: 'content',
      position: 15
    },
    {
      key: 'difficulty',
      value: 'all',
      type: 'string',
      position: 1
    }
  ],
  data: [
    {
      id: 75592,
      content_id: 213233,
      key: 'description',
      value: 'This is an introduction to the paradiddle family of rudiments.',
      position: 1
    },
    {
      id: 75593,
      content_id: 213233,
      key: 'thumbnail_url',
      value:
        'https://dzryyo1we6bm3.cloudfront.net/hudson-packs/great-hands-for-a-lifetime/ghfal-33-paradiddle-family.jpg',
      position: 1
    },
    {
      id: 75594,
      content_id: 213233,
      key: 'original_thumbnail_url',
      value:
        'https://dzryyo1we6bm3.cloudfront.net/hudson-packs/great-hands-for-a-lifetime/original_thumbnails/ghfal-33-paradiddle-family.jpg',
      position: 1
    }
  ],
  permissions: [
    {
      id: 42,
      content_id: 213233,
      content_type: null,
      permission_id: 42,
      brand: 'drumeo',
      name: 'Great Hands For A Lifetime'
    }
  ],
  user_progress: {
    '149628': {
      id: 9285445,
      content_id: 213233,
      user_id: 149628,
      state: 'started',
      progress_percent: 0,
      higher_key_progress: null,
      updated_on: '2020-08-05 06:33:46'
    }
  },
  completed: false,
  started: true,
  progress_percent: 0,
  user_playlists: {
    '149628': [
      {
        id: 186385,
        slug: 'primary-playlist',
        type: 'user-playlist',
        sort: 0,
        status: 'published',
        language: 'en-US',
        brand: 'drumeo',
        total_xp: '34677',
        published_on: '2017-12-13 17:27:17',
        created_on: '2017-12-13 17:27:17',
        archived_on: null,
        child_position: 1,
        child_id: 213233,
        parent_id: 186385
      }
    ]
  },
  is_added_to_primary_playlist: true,
  published_on_in_timezone: {
    date: '2018-09-25 11:59:31.000000',
    timezone_type: 3,
    timezone: 'America/Los_Angeles'
  },
  is_new: false,
  assignments: [
    {
      id: 210477,
      slug: '-sharp1',
      type: 'assignment',
      sort: 0,
      status: 'published',
      language: 'en-US',
      brand: 'drumeo',
      total_xp: null,
      published_on: '2018-10-10 19:00:00',
      created_on: '2018-08-01 16:38:22',
      archived_on: null,
      parent_id: null,
      child_id: null,
      fields: [
        {
          id: 235683,
          content_id: 210477,
          key: 'title',
          value: '#1',
          type: 'string',
          position: 1
        },
        {
          id: 235684,
          content_id: 210477,
          key: 'soundslice_slug',
          value: '170400',
          type: 'string',
          position: 1
        },
        {
          key: 'difficulty',
          value: 'all',
          type: 'string',
          position: 1
        }
      ],
      data: [
        {
          id: 67615,
          content_id: 210477,
          key: 'soundslice_xml_file_url',
          value: 'https://d1923uyy6spedc.cloudfront.net/ex1-sp.musicxml',
          position: 1
        },
        {
          id: 67616,
          content_id: 210477,
          key: 'sheet_music_image_url',
          value: 'https://d1923uyy6spedc.cloudfront.net/ex1p-sp.svg',
          position: 1
        }
      ],
      permissions: [],
      user_progress: {
        '149628': []
      },
      completed: false,
      started: false,
      progress_percent: 0,
      user_playlists: {
        '149628': []
      },
      is_added_to_primary_playlist: false,
      published_on_in_timezone: {
        date: '2018-10-10 12:00:00.000000',
        timezone_type: 3,
        timezone: 'America/Los_Angeles'
      },
      is_new: false,
      xp: 25,
      like_count: 0
    },
    {
      id: 210478,
      slug: 'check-pattern',
      type: 'assignment',
      sort: 0,
      status: 'published',
      language: 'en-US',
      brand: 'drumeo',
      total_xp: null,
      published_on: '2018-10-10 19:00:00',
      created_on: '2018-08-01 16:40:42',
      archived_on: null,
      parent_id: null,
      child_id: null,
      fields: [
        {
          id: 235685,
          content_id: 210478,
          key: 'title',
          value: 'Check Pattern',
          type: 'string',
          position: 1
        },
        {
          id: 235686,
          content_id: 210478,
          key: 'soundslice_slug',
          value: '170401',
          type: 'string',
          position: 1
        },
        {
          key: 'difficulty',
          value: 'all',
          type: 'string',
          position: 1
        }
      ],
      data: [
        {
          id: 67618,
          content_id: 210478,
          key: 'soundslice_xml_file_url',
          value: 'https://d1923uyy6spedc.cloudfront.net/ex2-check.musicxml',
          position: 1
        },
        {
          id: 67619,
          content_id: 210478,
          key: 'sheet_music_image_url',
          value: 'https://d1923uyy6spedc.cloudfront.net/ex2p-check.svg',
          position: 1
        }
      ],
      permissions: [],
      user_progress: {
        '149628': []
      },
      completed: false,
      started: false,
      progress_percent: 0,
      user_playlists: {
        '149628': []
      },
      is_added_to_primary_playlist: false,
      published_on_in_timezone: {
        date: '2018-10-10 12:00:00.000000',
        timezone_type: 3,
        timezone: 'America/Los_Angeles'
      },
      is_new: false,
      xp: 25,
      like_count: 0
    },
    {
      id: 210479,
      slug: '-sharp1',
      type: 'assignment',
      sort: 0,
      status: 'published',
      language: 'en-US',
      brand: 'drumeo',
      total_xp: null,
      published_on: '2018-10-02 19:00:00',
      created_on: '2018-08-01 16:43:20',
      archived_on: null,
      parent_id: null,
      child_id: null,
      fields: [
        {
          id: 235687,
          content_id: 210479,
          key: 'title',
          value: '#1',
          type: 'string',
          position: 1
        },
        {
          id: 235688,
          content_id: 210479,
          key: 'soundslice_slug',
          value: '170402',
          type: 'string',
          position: 1
        },
        {
          key: 'difficulty',
          value: 'all',
          type: 'string',
          position: 1
        }
      ],
      data: [
        {
          id: 67621,
          content_id: 210479,
          key: 'soundslice_xml_file_url',
          value: 'https://d1923uyy6spedc.cloudfront.net/ex3-dp.musicxml',
          position: 1
        },
        {
          id: 67622,
          content_id: 210479,
          key: 'sheet_music_image_url',
          value: 'https://d1923uyy6spedc.cloudfront.net/ex3p-dp.svg',
          position: 1
        }
      ],
      permissions: [],
      user_progress: {
        '149628': []
      },
      completed: false,
      started: false,
      progress_percent: 0,
      user_playlists: {
        '149628': []
      },
      is_added_to_primary_playlist: false,
      published_on_in_timezone: {
        date: '2018-10-02 12:00:00.000000',
        timezone_type: 3,
        timezone: 'America/Los_Angeles'
      },
      is_new: false,
      xp: 25,
      like_count: 0
    },
    {
      id: 210480,
      slug: '-sharp2',
      type: 'assignment',
      sort: 0,
      status: 'published',
      language: 'en-US',
      brand: 'drumeo',
      total_xp: null,
      published_on: '2018-10-02 19:00:00',
      created_on: '2018-08-01 16:44:52',
      archived_on: null,
      parent_id: null,
      child_id: null,
      fields: [
        {
          id: 235689,
          content_id: 210480,
          key: 'title',
          value: '#2',
          type: 'string',
          position: 1
        },
        {
          id: 235690,
          content_id: 210480,
          key: 'soundslice_slug',
          value: '170403',
          type: 'string',
          position: 1
        },
        {
          key: 'difficulty',
          value: 'all',
          type: 'string',
          position: 1
        }
      ],
      data: [
        {
          id: 67624,
          content_id: 210480,
          key: 'soundslice_xml_file_url',
          value: 'https://d1923uyy6spedc.cloudfront.net/ex4-dp.musicxml',
          position: 1
        },
        {
          id: 67625,
          content_id: 210480,
          key: 'sheet_music_image_url',
          value: 'https://d1923uyy6spedc.cloudfront.net/ex4p-dp.svg',
          position: 1
        }
      ],
      permissions: [],
      user_progress: {
        '149628': []
      },
      completed: false,
      started: false,
      progress_percent: 0,
      user_playlists: {
        '149628': []
      },
      is_added_to_primary_playlist: false,
      published_on_in_timezone: {
        date: '2018-10-02 12:00:00.000000',
        timezone_type: 3,
        timezone: 'America/Los_Angeles'
      },
      is_new: false,
      xp: 25,
      like_count: 0
    },
    {
      id: 210481,
      slug: '-sharp1',
      type: 'assignment',
      sort: 0,
      status: 'published',
      language: 'en-US',
      brand: 'drumeo',
      total_xp: null,
      published_on: '2018-10-02 19:00:00',
      created_on: '2018-08-01 16:46:58',
      archived_on: null,
      parent_id: null,
      child_id: null,
      fields: [
        {
          id: 235691,
          content_id: 210481,
          key: 'title',
          value: '#1',
          type: 'string',
          position: 1
        },
        {
          id: 235692,
          content_id: 210481,
          key: 'soundslice_slug',
          value: '170404',
          type: 'string',
          position: 1
        },
        {
          key: 'difficulty',
          value: 'all',
          type: 'string',
          position: 1
        }
      ],
      data: [
        {
          id: 67627,
          content_id: 210481,
          key: 'soundslice_xml_file_url',
          value: 'https://d1923uyy6spedc.cloudfront.net/ex5-tp.musicxml',
          position: 1
        },
        {
          id: 67628,
          content_id: 210481,
          key: 'sheet_music_image_url',
          value: 'https://d1923uyy6spedc.cloudfront.net/ex5p-tp.svg',
          position: 1
        }
      ],
      permissions: [],
      user_progress: {
        '149628': []
      },
      completed: false,
      started: false,
      progress_percent: 0,
      user_playlists: {
        '149628': []
      },
      is_added_to_primary_playlist: false,
      published_on_in_timezone: {
        date: '2018-10-02 12:00:00.000000',
        timezone_type: 3,
        timezone: 'America/Los_Angeles'
      },
      is_new: false,
      xp: 25,
      like_count: 0
    },
    {
      id: 210482,
      slug: '-sharp2',
      type: 'assignment',
      sort: 0,
      status: 'published',
      language: 'en-US',
      brand: 'drumeo',
      total_xp: null,
      published_on: '2018-10-02 19:00:00',
      created_on: '2018-08-01 16:48:32',
      archived_on: null,
      parent_id: null,
      child_id: null,
      fields: [
        {
          id: 235693,
          content_id: 210482,
          key: 'title',
          value: '#2',
          type: 'string',
          position: 1
        },
        {
          id: 235694,
          content_id: 210482,
          key: 'soundslice_slug',
          value: '170405',
          type: 'string',
          position: 1
        },
        {
          key: 'difficulty',
          value: 'all',
          type: 'string',
          position: 1
        }
      ],
      data: [
        {
          id: 67630,
          content_id: 210482,
          key: 'soundslice_xml_file_url',
          value: 'https://d1923uyy6spedc.cloudfront.net/ex6-tp.musicxml',
          position: 1
        },
        {
          id: 67631,
          content_id: 210482,
          key: 'sheet_music_image_url',
          value: 'https://d1923uyy6spedc.cloudfront.net/ex6p-tp.svg',
          position: 1
        }
      ],
      permissions: [],
      user_progress: {
        '149628': []
      },
      completed: false,
      started: false,
      progress_percent: 0,
      user_playlists: {
        '149628': []
      },
      is_added_to_primary_playlist: false,
      published_on_in_timezone: {
        date: '2018-10-02 12:00:00.000000',
        timezone_type: 3,
        timezone: 'America/Los_Angeles'
      },
      is_new: false,
      xp: 25,
      like_count: 0
    },
    {
      id: 210484,
      slug: 'single-paradiddle-variation',
      type: 'assignment',
      sort: 0,
      status: 'published',
      language: 'en-US',
      brand: 'drumeo',
      total_xp: null,
      published_on: '2018-10-02 19:00:00',
      created_on: '2018-08-01 16:55:34',
      archived_on: null,
      parent_id: null,
      child_id: null,
      fields: [
        {
          id: 235697,
          content_id: 210484,
          key: 'title',
          value: 'Single Paradiddle Variation',
          type: 'string',
          position: 1
        },
        {
          id: 235698,
          content_id: 210484,
          key: 'soundslice_slug',
          value: '170408',
          type: 'string',
          position: 1
        },
        {
          key: 'difficulty',
          value: 'all',
          type: 'string',
          position: 1
        }
      ],
      data: [
        {
          id: 67636,
          content_id: 210484,
          key: 'soundslice_xml_file_url',
          value: 'https://d1923uyy6spedc.cloudfront.net/ex8.musicxml',
          position: 1
        },
        {
          id: 67637,
          content_id: 210484,
          key: 'sheet_music_image_url',
          value: 'https://d1923uyy6spedc.cloudfront.net/ex8p.svg',
          position: 1
        }
      ],
      permissions: [],
      user_progress: {
        '149628': []
      },
      completed: false,
      started: false,
      progress_percent: 0,
      user_playlists: {
        '149628': []
      },
      is_added_to_primary_playlist: false,
      published_on_in_timezone: {
        date: '2018-10-02 12:00:00.000000',
        timezone_type: 3,
        timezone: 'America/Los_Angeles'
      },
      is_new: false,
      xp: 25,
      like_count: 0
    },
    {
      id: 210485,
      slug: 'double-paradiddle-variation',
      type: 'assignment',
      sort: 0,
      status: 'published',
      language: 'en-US',
      brand: 'drumeo',
      total_xp: null,
      published_on: '2018-10-02 19:00:00',
      created_on: '2018-08-01 16:56:56',
      archived_on: null,
      parent_id: null,
      child_id: null,
      fields: [
        {
          id: 235699,
          content_id: 210485,
          key: 'title',
          value: 'Double Paradiddle Variation',
          type: 'string',
          position: 1
        },
        {
          id: 235700,
          content_id: 210485,
          key: 'soundslice_slug',
          value: '170409',
          type: 'string',
          position: 1
        },
        {
          key: 'difficulty',
          value: 'all',
          type: 'string',
          position: 1
        }
      ],
      data: [
        {
          id: 67639,
          content_id: 210485,
          key: 'soundslice_xml_file_url',
          value: 'https://d1923uyy6spedc.cloudfront.net/ex9.musicxml',
          position: 1
        },
        {
          id: 67640,
          content_id: 210485,
          key: 'sheet_music_image_url',
          value: 'https://d1923uyy6spedc.cloudfront.net/ex9p.svg',
          position: 1
        }
      ],
      permissions: [],
      user_progress: {
        '149628': []
      },
      completed: false,
      started: false,
      progress_percent: 0,
      user_playlists: {
        '149628': []
      },
      is_added_to_primary_playlist: false,
      published_on_in_timezone: {
        date: '2018-10-02 12:00:00.000000',
        timezone_type: 3,
        timezone: 'America/Los_Angeles'
      },
      is_new: false,
      xp: 25,
      like_count: 0
    },
    {
      id: 210487,
      slug: 'triple-paradiddle-variation',
      type: 'assignment',
      sort: 0,
      status: 'published',
      language: 'en-US',
      brand: 'drumeo',
      total_xp: null,
      published_on: '2018-10-02 19:00:00',
      created_on: '2018-08-01 16:59:11',
      archived_on: null,
      parent_id: null,
      child_id: null,
      fields: [
        {
          id: 235701,
          content_id: 210487,
          key: 'title',
          value: 'Triple Paradiddle Variation',
          type: 'string',
          position: 1
        },
        {
          id: 235702,
          content_id: 210487,
          key: 'soundslice_slug',
          value: '170410',
          type: 'string',
          position: 1
        },
        {
          key: 'difficulty',
          value: 'all',
          type: 'string',
          position: 1
        }
      ],
      data: [
        {
          id: 67642,
          content_id: 210487,
          key: 'soundslice_xml_file_url',
          value: 'https://d1923uyy6spedc.cloudfront.net/ex10p.musicxml',
          position: 1
        },
        {
          id: 67643,
          content_id: 210487,
          key: 'sheet_music_image_url',
          value: 'https://d1923uyy6spedc.cloudfront.net/ex10p.svg',
          position: 1
        }
      ],
      permissions: [],
      user_progress: {
        '149628': []
      },
      completed: false,
      started: false,
      progress_percent: 0,
      user_playlists: {
        '149628': []
      },
      is_added_to_primary_playlist: false,
      published_on_in_timezone: {
        date: '2018-10-02 12:00:00.000000',
        timezone_type: 3,
        timezone: 'America/Los_Angeles'
      },
      is_new: false,
      xp: 25,
      like_count: 0
    },
    {
      id: 210488,
      slug: 'paradiddle-variation-combination',
      type: 'assignment',
      sort: 0,
      status: 'published',
      language: 'en-US',
      brand: 'drumeo',
      total_xp: null,
      published_on: '2018-10-02 19:00:00',
      created_on: '2018-08-01 17:01:50',
      archived_on: null,
      parent_id: null,
      child_id: null,
      fields: [
        {
          id: 235703,
          content_id: 210488,
          key: 'title',
          value: 'Paradiddle Variation Combination',
          type: 'string',
          position: 1
        },
        {
          id: 235704,
          content_id: 210488,
          key: 'soundslice_slug',
          value: '170411',
          type: 'string',
          position: 1
        },
        {
          key: 'difficulty',
          value: 'all',
          type: 'string',
          position: 1
        }
      ],
      data: [
        {
          id: 67645,
          content_id: 210488,
          key: 'soundslice_xml_file_url',
          value: 'https://d1923uyy6spedc.cloudfront.net/ex11p.musicxml',
          position: 1
        },
        {
          id: 67646,
          content_id: 210488,
          key: 'sheet_music_image_url',
          value: 'https://d1923uyy6spedc.cloudfront.net/ex11p-check.svg',
          position: 1
        }
      ],
      permissions: [],
      user_progress: {
        '149628': []
      },
      completed: false,
      started: false,
      progress_percent: 0,
      user_playlists: {
        '149628': []
      },
      is_added_to_primary_playlist: false,
      published_on_in_timezone: {
        date: '2018-10-02 12:00:00.000000',
        timezone_type: 3,
        timezone: 'America/Los_Angeles'
      },
      is_new: false,
      xp: 25,
      like_count: 0
    },
    {
      id: 210483,
      slug: 'paradiddle-combination',
      type: 'assignment',
      sort: 0,
      status: 'published',
      language: 'en-US',
      brand: 'drumeo',
      total_xp: null,
      published_on: '2018-10-09 19:00:00',
      created_on: '2018-08-01 16:50:52',
      archived_on: null,
      parent_id: null,
      child_id: null,
      fields: [
        {
          id: 235695,
          content_id: 210483,
          key: 'title',
          value: 'Paradiddle Combination',
          type: 'string',
          position: 1
        },
        {
          id: 235696,
          content_id: 210483,
          key: 'soundslice_slug',
          value: '170406',
          type: 'string',
          position: 1
        },
        {
          key: 'difficulty',
          value: 'all',
          type: 'string',
          position: 1
        }
      ],
      data: [
        {
          id: 67633,
          content_id: 210483,
          key: 'soundslice_xml_file_url',
          value: 'https://d1923uyy6spedc.cloudfront.net/ex7-check.musicxml',
          position: 1
        },
        {
          id: 67634,
          content_id: 210483,
          key: 'sheet_music_image_url',
          value: 'https://d1923uyy6spedc.cloudfront.net/ex7p-check.svg',
          position: 1
        }
      ],
      permissions: [],
      user_progress: {
        '149628': []
      },
      completed: false,
      started: false,
      progress_percent: 0,
      user_playlists: {
        '149628': []
      },
      is_added_to_primary_playlist: false,
      published_on_in_timezone: {
        date: '2018-10-09 12:00:00.000000',
        timezone_type: 3,
        timezone: 'America/Los_Angeles'
      },
      is_new: false,
      xp: 25,
      like_count: 0
    },
    {
      id: 210489,
      slug: '-sharp1',
      type: 'assignment',
      sort: 0,
      status: 'published',
      language: 'en-US',
      brand: 'drumeo',
      total_xp: null,
      published_on: '2018-10-01 19:00:00',
      created_on: '2018-08-01 17:05:07',
      archived_on: null,
      parent_id: null,
      child_id: null,
      fields: [
        {
          id: 235705,
          content_id: 210489,
          key: 'title',
          value: '#1',
          type: 'string',
          position: 1
        },
        {
          id: 235706,
          content_id: 210489,
          key: 'soundslice_slug',
          value: '170412',
          type: 'string',
          position: 1
        },
        {
          key: 'difficulty',
          value: 'all',
          type: 'string',
          position: 1
        }
      ],
      data: [
        {
          id: 67648,
          content_id: 210489,
          key: 'soundslice_xml_file_url',
          value: 'https://d1923uyy6spedc.cloudfront.net/ex12p.musicxml',
          position: 1
        },
        {
          id: 67649,
          content_id: 210489,
          key: 'sheet_music_image_url',
          value: 'https://d1923uyy6spedc.cloudfront.net/ex12p.svg',
          position: 1
        }
      ],
      permissions: [],
      user_progress: {
        '149628': []
      },
      completed: false,
      started: false,
      progress_percent: 0,
      user_playlists: {
        '149628': []
      },
      is_added_to_primary_playlist: false,
      published_on_in_timezone: {
        date: '2018-10-01 12:00:00.000000',
        timezone_type: 3,
        timezone: 'America/Los_Angeles'
      },
      is_new: false,
      xp: 25,
      like_count: 0
    },
    {
      id: 210491,
      slug: '-sharp2',
      type: 'assignment',
      sort: 0,
      status: 'published',
      language: 'en-US',
      brand: 'drumeo',
      total_xp: null,
      published_on: '2018-10-02 19:00:00',
      created_on: '2018-08-01 17:08:46',
      archived_on: null,
      parent_id: null,
      child_id: null,
      fields: [
        {
          id: 235707,
          content_id: 210491,
          key: 'title',
          value: '#2',
          type: 'string',
          position: 1
        },
        {
          id: 235708,
          content_id: 210491,
          key: 'soundslice_slug',
          value: '170413',
          type: 'string',
          position: 1
        },
        {
          key: 'difficulty',
          value: 'all',
          type: 'string',
          position: 1
        }
      ],
      data: [
        {
          id: 67651,
          content_id: 210491,
          key: 'soundslice_xml_file_url',
          value: 'https://d1923uyy6spedc.cloudfront.net/ex13p.musicxml',
          position: 1
        },
        {
          id: 67652,
          content_id: 210491,
          key: 'sheet_music_image_url',
          value: 'https://d1923uyy6spedc.cloudfront.net/ex13p.svg',
          position: 1
        }
      ],
      permissions: [],
      user_progress: {
        '149628': []
      },
      completed: false,
      started: false,
      progress_percent: 0,
      user_playlists: {
        '149628': []
      },
      is_added_to_primary_playlist: false,
      published_on_in_timezone: {
        date: '2018-10-02 12:00:00.000000',
        timezone_type: 3,
        timezone: 'America/Los_Angeles'
      },
      is_new: false,
      xp: 25,
      like_count: 0
    },
    {
      id: 210492,
      slug: 'check-pattern',
      type: 'assignment',
      sort: 0,
      status: 'published',
      language: 'en-US',
      brand: 'drumeo',
      total_xp: null,
      published_on: '2018-10-01 19:00:00',
      created_on: '2018-08-01 17:11:16',
      archived_on: null,
      parent_id: null,
      child_id: null,
      fields: [
        {
          id: 235709,
          content_id: 210492,
          key: 'title',
          value: 'Check Pattern',
          type: 'string',
          position: 1
        },
        {
          id: 235710,
          content_id: 210492,
          key: 'soundslice_slug',
          value: '170414',
          type: 'string',
          position: 1
        },
        {
          key: 'difficulty',
          value: 'all',
          type: 'string',
          position: 1
        }
      ],
      data: [
        {
          id: 67654,
          content_id: 210492,
          key: 'soundslice_xml_file_url',
          value: 'https://d1923uyy6spedc.cloudfront.net/ex14p.musicxml',
          position: 1
        },
        {
          id: 67655,
          content_id: 210492,
          key: 'sheet_music_image_url',
          value: 'https://d1923uyy6spedc.cloudfront.net/ex14p-check.svg',
          position: 1
        }
      ],
      permissions: [],
      user_progress: {
        '149628': []
      },
      completed: false,
      started: false,
      progress_percent: 0,
      user_playlists: {
        '149628': []
      },
      is_added_to_primary_playlist: false,
      published_on_in_timezone: {
        date: '2018-10-01 12:00:00.000000',
        timezone_type: 3,
        timezone: 'America/Los_Angeles'
      },
      is_new: false,
      xp: 25,
      like_count: 0
    },
    {
      id: 210493,
      slug: 'paradiddle-diddle-combination',
      type: 'assignment',
      sort: 0,
      status: 'published',
      language: 'en-US',
      brand: 'drumeo',
      total_xp: null,
      published_on: '2018-10-01 19:00:00',
      created_on: '2018-08-01 17:19:15',
      archived_on: null,
      parent_id: null,
      child_id: null,
      fields: [
        {
          id: 235711,
          content_id: 210493,
          key: 'title',
          value: 'Paradiddle-Diddle Combination',
          type: 'string',
          position: 1
        },
        {
          id: 235712,
          content_id: 210493,
          key: 'soundslice_slug',
          value: '170415',
          type: 'string',
          position: 1
        },
        {
          key: 'difficulty',
          value: 'all',
          type: 'string',
          position: 1
        }
      ],
      data: [
        {
          id: 67657,
          content_id: 210493,
          key: 'soundslice_xml_file_url',
          value: 'https://d1923uyy6spedc.cloudfront.net/ex15p.musicxml',
          position: 1
        },
        {
          id: 67658,
          content_id: 210493,
          key: 'sheet_music_image_url',
          value: 'https://d1923uyy6spedc.cloudfront.net/ex15p---check.svg',
          position: 1
        }
      ],
      permissions: [],
      user_progress: {
        '149628': []
      },
      completed: false,
      started: false,
      progress_percent: 0,
      user_playlists: {
        '149628': []
      },
      is_added_to_primary_playlist: false,
      published_on_in_timezone: {
        date: '2018-10-01 12:00:00.000000',
        timezone_type: 3,
        timezone: 'America/Los_Angeles'
      },
      is_new: false,
      xp: 25,
      like_count: 0
    }
  ],
  xp: 150,
  mobile_app_url:
    'https://staging.drumeo.com/laravel/public/api/members/pack/lesson/213233',
  url:
    'https://staging.drumeo.com/laravel/public/members/packs/great-hands-for-a-lifetime/paradiddles/paradiddle-family',
  xp_bonus: 150,
  length_in_seconds: '1271',
  last_watch_position_in_seconds: 0,
  like_count: 9,
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
  video_poster_image_url:
    'https://i.vimeocdn.com/video/705196910_1280x720.jpg?r=pad',
  captions: [],
  hlsManifestUrl:
    'https://player.vimeo.com/external/273408126.m3u8?s=572d9ff1b514ad1730dfc9f5353d1fa22a4081b7&oauth2_token_id=1284792283',
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
  related_lessons: [
    {
      id: 213233,
      slug: 'paradiddle-family',
      type: 'pack-bundle-lesson',
      sort: 0,
      status: 'published',
      language: 'en-US',
      brand: 'drumeo',
      total_xp: null,
      published_on: '2018-09-25 18:59:31',
      created_on: '2018-09-25 18:59:31',
      archived_on: null,
      parent_id: 213232,
      child_id: 213233,
      fields: [
        {
          id: 242122,
          content_id: 213233,
          key: 'title',
          value: 'Paradiddle Family',
          type: 'string',
          position: 1
        },
        {
          id: 242123,
          content_id: 213233,
          key: 'exercise_id',
          value: {
            id: 210477,
            slug: '-sharp1',
            type: 'assignment',
            sort: 0,
            status: 'published',
            language: 'en-US',
            brand: 'drumeo',
            total_xp: null,
            published_on: '2018-10-10 19:00:00',
            created_on: '2018-08-01 16:38:22',
            archived_on: null,
            parent_id: null,
            child_id: null,
            fields: [
              {
                id: 235683,
                content_id: 210477,
                key: 'title',
                value: '#1',
                type: 'string',
                position: 1
              },
              {
                id: 235684,
                content_id: 210477,
                key: 'soundslice_slug',
                value: '170400',
                type: 'string',
                position: 1
              }
            ],
            data: [
              {
                id: 67615,
                content_id: 210477,
                key: 'soundslice_xml_file_url',
                value: 'https://d1923uyy6spedc.cloudfront.net/ex1-sp.musicxml',
                position: 1
              },
              {
                id: 67616,
                content_id: 210477,
                key: 'sheet_music_image_url',
                value: 'https://d1923uyy6spedc.cloudfront.net/ex1p-sp.svg',
                position: 1
              }
            ],
            permissions: []
          },
          type: 'content',
          position: 1
        },
        {
          id: 242127,
          content_id: 213233,
          key: 'video',
          value: {
            id: 213234,
            slug: 'vimeo-video-273408126',
            type: 'vimeo-video',
            sort: 0,
            status: 'published',
            language: 'en-US',
            brand: 'drumeo',
            total_xp: null,
            published_on: '2018-09-25 18:59:31',
            created_on: '2018-09-25 18:59:31',
            archived_on: null,
            parent_id: null,
            child_id: null,
            fields: [
              {
                id: 242125,
                content_id: 213234,
                key: 'vimeo_video_id',
                value: '273408126',
                type: 'string',
                position: 1
              },
              {
                id: 242126,
                content_id: 213234,
                key: 'length_in_seconds',
                value: '1271',
                type: 'integer',
                position: 1
              }
            ],
            data: [],
            permissions: []
          },
          type: 'content',
          position: 1
        },
        {
          id: 242124,
          content_id: 213233,
          key: 'exercise_id',
          value: {
            id: 210478,
            slug: 'check-pattern',
            type: 'assignment',
            sort: 0,
            status: 'published',
            language: 'en-US',
            brand: 'drumeo',
            total_xp: null,
            published_on: '2018-10-10 19:00:00',
            created_on: '2018-08-01 16:40:42',
            archived_on: null,
            parent_id: null,
            child_id: null,
            fields: [
              {
                id: 235685,
                content_id: 210478,
                key: 'title',
                value: 'Check Pattern',
                type: 'string',
                position: 1
              },
              {
                id: 235686,
                content_id: 210478,
                key: 'soundslice_slug',
                value: '170401',
                type: 'string',
                position: 1
              }
            ],
            data: [
              {
                id: 67618,
                content_id: 210478,
                key: 'soundslice_xml_file_url',
                value:
                  'https://d1923uyy6spedc.cloudfront.net/ex2-check.musicxml',
                position: 1
              },
              {
                id: 67619,
                content_id: 210478,
                key: 'sheet_music_image_url',
                value: 'https://d1923uyy6spedc.cloudfront.net/ex2p-check.svg',
                position: 1
              }
            ],
            permissions: []
          },
          type: 'content',
          position: 2
        },
        {
          id: 244550,
          content_id: 213233,
          key: 'exercise_id',
          value: {
            id: 210479,
            slug: '-sharp1',
            type: 'assignment',
            sort: 0,
            status: 'published',
            language: 'en-US',
            brand: 'drumeo',
            total_xp: null,
            published_on: '2018-10-02 19:00:00',
            created_on: '2018-08-01 16:43:20',
            archived_on: null,
            parent_id: null,
            child_id: null,
            fields: [
              {
                id: 235687,
                content_id: 210479,
                key: 'title',
                value: '#1',
                type: 'string',
                position: 1
              },
              {
                id: 235688,
                content_id: 210479,
                key: 'soundslice_slug',
                value: '170402',
                type: 'string',
                position: 1
              }
            ],
            data: [
              {
                id: 67621,
                content_id: 210479,
                key: 'soundslice_xml_file_url',
                value: 'https://d1923uyy6spedc.cloudfront.net/ex3-dp.musicxml',
                position: 1
              },
              {
                id: 67622,
                content_id: 210479,
                key: 'sheet_music_image_url',
                value: 'https://d1923uyy6spedc.cloudfront.net/ex3p-dp.svg',
                position: 1
              }
            ],
            permissions: []
          },
          type: 'content',
          position: 3
        },
        {
          id: 244551,
          content_id: 213233,
          key: 'exercise_id',
          value: {
            id: 210480,
            slug: '-sharp2',
            type: 'assignment',
            sort: 0,
            status: 'published',
            language: 'en-US',
            brand: 'drumeo',
            total_xp: null,
            published_on: '2018-10-02 19:00:00',
            created_on: '2018-08-01 16:44:52',
            archived_on: null,
            parent_id: null,
            child_id: null,
            fields: [
              {
                id: 235689,
                content_id: 210480,
                key: 'title',
                value: '#2',
                type: 'string',
                position: 1
              },
              {
                id: 235690,
                content_id: 210480,
                key: 'soundslice_slug',
                value: '170403',
                type: 'string',
                position: 1
              }
            ],
            data: [
              {
                id: 67624,
                content_id: 210480,
                key: 'soundslice_xml_file_url',
                value: 'https://d1923uyy6spedc.cloudfront.net/ex4-dp.musicxml',
                position: 1
              },
              {
                id: 67625,
                content_id: 210480,
                key: 'sheet_music_image_url',
                value: 'https://d1923uyy6spedc.cloudfront.net/ex4p-dp.svg',
                position: 1
              }
            ],
            permissions: []
          },
          type: 'content',
          position: 4
        },
        {
          id: 244552,
          content_id: 213233,
          key: 'exercise_id',
          value: {
            id: 210481,
            slug: '-sharp1',
            type: 'assignment',
            sort: 0,
            status: 'published',
            language: 'en-US',
            brand: 'drumeo',
            total_xp: null,
            published_on: '2018-10-02 19:00:00',
            created_on: '2018-08-01 16:46:58',
            archived_on: null,
            parent_id: null,
            child_id: null,
            fields: [
              {
                id: 235691,
                content_id: 210481,
                key: 'title',
                value: '#1',
                type: 'string',
                position: 1
              },
              {
                id: 235692,
                content_id: 210481,
                key: 'soundslice_slug',
                value: '170404',
                type: 'string',
                position: 1
              }
            ],
            data: [
              {
                id: 67627,
                content_id: 210481,
                key: 'soundslice_xml_file_url',
                value: 'https://d1923uyy6spedc.cloudfront.net/ex5-tp.musicxml',
                position: 1
              },
              {
                id: 67628,
                content_id: 210481,
                key: 'sheet_music_image_url',
                value: 'https://d1923uyy6spedc.cloudfront.net/ex5p-tp.svg',
                position: 1
              }
            ],
            permissions: []
          },
          type: 'content',
          position: 5
        },
        {
          id: 244553,
          content_id: 213233,
          key: 'exercise_id',
          value: {
            id: 210482,
            slug: '-sharp2',
            type: 'assignment',
            sort: 0,
            status: 'published',
            language: 'en-US',
            brand: 'drumeo',
            total_xp: null,
            published_on: '2018-10-02 19:00:00',
            created_on: '2018-08-01 16:48:32',
            archived_on: null,
            parent_id: null,
            child_id: null,
            fields: [
              {
                id: 235693,
                content_id: 210482,
                key: 'title',
                value: '#2',
                type: 'string',
                position: 1
              },
              {
                id: 235694,
                content_id: 210482,
                key: 'soundslice_slug',
                value: '170405',
                type: 'string',
                position: 1
              }
            ],
            data: [
              {
                id: 67630,
                content_id: 210482,
                key: 'soundslice_xml_file_url',
                value: 'https://d1923uyy6spedc.cloudfront.net/ex6-tp.musicxml',
                position: 1
              },
              {
                id: 67631,
                content_id: 210482,
                key: 'sheet_music_image_url',
                value: 'https://d1923uyy6spedc.cloudfront.net/ex6p-tp.svg',
                position: 1
              }
            ],
            permissions: []
          },
          type: 'content',
          position: 6
        },
        {
          id: 244554,
          content_id: 213233,
          key: 'exercise_id',
          value: {
            id: 210484,
            slug: 'single-paradiddle-variation',
            type: 'assignment',
            sort: 0,
            status: 'published',
            language: 'en-US',
            brand: 'drumeo',
            total_xp: null,
            published_on: '2018-10-02 19:00:00',
            created_on: '2018-08-01 16:55:34',
            archived_on: null,
            parent_id: null,
            child_id: null,
            fields: [
              {
                id: 235697,
                content_id: 210484,
                key: 'title',
                value: 'Single Paradiddle Variation',
                type: 'string',
                position: 1
              },
              {
                id: 235698,
                content_id: 210484,
                key: 'soundslice_slug',
                value: '170408',
                type: 'string',
                position: 1
              }
            ],
            data: [
              {
                id: 67636,
                content_id: 210484,
                key: 'soundslice_xml_file_url',
                value: 'https://d1923uyy6spedc.cloudfront.net/ex8.musicxml',
                position: 1
              },
              {
                id: 67637,
                content_id: 210484,
                key: 'sheet_music_image_url',
                value: 'https://d1923uyy6spedc.cloudfront.net/ex8p.svg',
                position: 1
              }
            ],
            permissions: []
          },
          type: 'content',
          position: 7
        },
        {
          id: 244555,
          content_id: 213233,
          key: 'exercise_id',
          value: {
            id: 210485,
            slug: 'double-paradiddle-variation',
            type: 'assignment',
            sort: 0,
            status: 'published',
            language: 'en-US',
            brand: 'drumeo',
            total_xp: null,
            published_on: '2018-10-02 19:00:00',
            created_on: '2018-08-01 16:56:56',
            archived_on: null,
            parent_id: null,
            child_id: null,
            fields: [
              {
                id: 235699,
                content_id: 210485,
                key: 'title',
                value: 'Double Paradiddle Variation',
                type: 'string',
                position: 1
              },
              {
                id: 235700,
                content_id: 210485,
                key: 'soundslice_slug',
                value: '170409',
                type: 'string',
                position: 1
              }
            ],
            data: [
              {
                id: 67639,
                content_id: 210485,
                key: 'soundslice_xml_file_url',
                value: 'https://d1923uyy6spedc.cloudfront.net/ex9.musicxml',
                position: 1
              },
              {
                id: 67640,
                content_id: 210485,
                key: 'sheet_music_image_url',
                value: 'https://d1923uyy6spedc.cloudfront.net/ex9p.svg',
                position: 1
              }
            ],
            permissions: []
          },
          type: 'content',
          position: 8
        },
        {
          id: 244556,
          content_id: 213233,
          key: 'exercise_id',
          value: {
            id: 210487,
            slug: 'triple-paradiddle-variation',
            type: 'assignment',
            sort: 0,
            status: 'published',
            language: 'en-US',
            brand: 'drumeo',
            total_xp: null,
            published_on: '2018-10-02 19:00:00',
            created_on: '2018-08-01 16:59:11',
            archived_on: null,
            parent_id: null,
            child_id: null,
            fields: [
              {
                id: 235701,
                content_id: 210487,
                key: 'title',
                value: 'Triple Paradiddle Variation',
                type: 'string',
                position: 1
              },
              {
                id: 235702,
                content_id: 210487,
                key: 'soundslice_slug',
                value: '170410',
                type: 'string',
                position: 1
              }
            ],
            data: [
              {
                id: 67642,
                content_id: 210487,
                key: 'soundslice_xml_file_url',
                value: 'https://d1923uyy6spedc.cloudfront.net/ex10p.musicxml',
                position: 1
              },
              {
                id: 67643,
                content_id: 210487,
                key: 'sheet_music_image_url',
                value: 'https://d1923uyy6spedc.cloudfront.net/ex10p.svg',
                position: 1
              }
            ],
            permissions: []
          },
          type: 'content',
          position: 9
        },
        {
          id: 244557,
          content_id: 213233,
          key: 'exercise_id',
          value: {
            id: 210488,
            slug: 'paradiddle-variation-combination',
            type: 'assignment',
            sort: 0,
            status: 'published',
            language: 'en-US',
            brand: 'drumeo',
            total_xp: null,
            published_on: '2018-10-02 19:00:00',
            created_on: '2018-08-01 17:01:50',
            archived_on: null,
            parent_id: null,
            child_id: null,
            fields: [
              {
                id: 235703,
                content_id: 210488,
                key: 'title',
                value: 'Paradiddle Variation Combination',
                type: 'string',
                position: 1
              },
              {
                id: 235704,
                content_id: 210488,
                key: 'soundslice_slug',
                value: '170411',
                type: 'string',
                position: 1
              }
            ],
            data: [
              {
                id: 67645,
                content_id: 210488,
                key: 'soundslice_xml_file_url',
                value: 'https://d1923uyy6spedc.cloudfront.net/ex11p.musicxml',
                position: 1
              },
              {
                id: 67646,
                content_id: 210488,
                key: 'sheet_music_image_url',
                value: 'https://d1923uyy6spedc.cloudfront.net/ex11p-check.svg',
                position: 1
              }
            ],
            permissions: []
          },
          type: 'content',
          position: 10
        },
        {
          id: 244558,
          content_id: 213233,
          key: 'exercise_id',
          value: {
            id: 210483,
            slug: 'paradiddle-combination',
            type: 'assignment',
            sort: 0,
            status: 'published',
            language: 'en-US',
            brand: 'drumeo',
            total_xp: null,
            published_on: '2018-10-09 19:00:00',
            created_on: '2018-08-01 16:50:52',
            archived_on: null,
            parent_id: null,
            child_id: null,
            fields: [
              {
                id: 235695,
                content_id: 210483,
                key: 'title',
                value: 'Paradiddle Combination',
                type: 'string',
                position: 1
              },
              {
                id: 235696,
                content_id: 210483,
                key: 'soundslice_slug',
                value: '170406',
                type: 'string',
                position: 1
              }
            ],
            data: [
              {
                id: 67633,
                content_id: 210483,
                key: 'soundslice_xml_file_url',
                value:
                  'https://d1923uyy6spedc.cloudfront.net/ex7-check.musicxml',
                position: 1
              },
              {
                id: 67634,
                content_id: 210483,
                key: 'sheet_music_image_url',
                value: 'https://d1923uyy6spedc.cloudfront.net/ex7p-check.svg',
                position: 1
              }
            ],
            permissions: []
          },
          type: 'content',
          position: 11
        },
        {
          id: 244559,
          content_id: 213233,
          key: 'exercise_id',
          value: {
            id: 210489,
            slug: '-sharp1',
            type: 'assignment',
            sort: 0,
            status: 'published',
            language: 'en-US',
            brand: 'drumeo',
            total_xp: null,
            published_on: '2018-10-01 19:00:00',
            created_on: '2018-08-01 17:05:07',
            archived_on: null,
            parent_id: null,
            child_id: null,
            fields: [
              {
                id: 235705,
                content_id: 210489,
                key: 'title',
                value: '#1',
                type: 'string',
                position: 1
              },
              {
                id: 235706,
                content_id: 210489,
                key: 'soundslice_slug',
                value: '170412',
                type: 'string',
                position: 1
              }
            ],
            data: [
              {
                id: 67648,
                content_id: 210489,
                key: 'soundslice_xml_file_url',
                value: 'https://d1923uyy6spedc.cloudfront.net/ex12p.musicxml',
                position: 1
              },
              {
                id: 67649,
                content_id: 210489,
                key: 'sheet_music_image_url',
                value: 'https://d1923uyy6spedc.cloudfront.net/ex12p.svg',
                position: 1
              }
            ],
            permissions: []
          },
          type: 'content',
          position: 12
        },
        {
          id: 244560,
          content_id: 213233,
          key: 'exercise_id',
          value: {
            id: 210491,
            slug: '-sharp2',
            type: 'assignment',
            sort: 0,
            status: 'published',
            language: 'en-US',
            brand: 'drumeo',
            total_xp: null,
            published_on: '2018-10-02 19:00:00',
            created_on: '2018-08-01 17:08:46',
            archived_on: null,
            parent_id: null,
            child_id: null,
            fields: [
              {
                id: 235707,
                content_id: 210491,
                key: 'title',
                value: '#2',
                type: 'string',
                position: 1
              },
              {
                id: 235708,
                content_id: 210491,
                key: 'soundslice_slug',
                value: '170413',
                type: 'string',
                position: 1
              }
            ],
            data: [
              {
                id: 67651,
                content_id: 210491,
                key: 'soundslice_xml_file_url',
                value: 'https://d1923uyy6spedc.cloudfront.net/ex13p.musicxml',
                position: 1
              },
              {
                id: 67652,
                content_id: 210491,
                key: 'sheet_music_image_url',
                value: 'https://d1923uyy6spedc.cloudfront.net/ex13p.svg',
                position: 1
              }
            ],
            permissions: []
          },
          type: 'content',
          position: 13
        },
        {
          id: 244561,
          content_id: 213233,
          key: 'exercise_id',
          value: {
            id: 210492,
            slug: 'check-pattern',
            type: 'assignment',
            sort: 0,
            status: 'published',
            language: 'en-US',
            brand: 'drumeo',
            total_xp: null,
            published_on: '2018-10-01 19:00:00',
            created_on: '2018-08-01 17:11:16',
            archived_on: null,
            parent_id: null,
            child_id: null,
            fields: [
              {
                id: 235709,
                content_id: 210492,
                key: 'title',
                value: 'Check Pattern',
                type: 'string',
                position: 1
              },
              {
                id: 235710,
                content_id: 210492,
                key: 'soundslice_slug',
                value: '170414',
                type: 'string',
                position: 1
              }
            ],
            data: [
              {
                id: 67654,
                content_id: 210492,
                key: 'soundslice_xml_file_url',
                value: 'https://d1923uyy6spedc.cloudfront.net/ex14p.musicxml',
                position: 1
              },
              {
                id: 67655,
                content_id: 210492,
                key: 'sheet_music_image_url',
                value: 'https://d1923uyy6spedc.cloudfront.net/ex14p-check.svg',
                position: 1
              }
            ],
            permissions: []
          },
          type: 'content',
          position: 14
        },
        {
          id: 244562,
          content_id: 213233,
          key: 'exercise_id',
          value: {
            id: 210493,
            slug: 'paradiddle-diddle-combination',
            type: 'assignment',
            sort: 0,
            status: 'published',
            language: 'en-US',
            brand: 'drumeo',
            total_xp: null,
            published_on: '2018-10-01 19:00:00',
            created_on: '2018-08-01 17:19:15',
            archived_on: null,
            parent_id: null,
            child_id: null,
            fields: [
              {
                id: 235711,
                content_id: 210493,
                key: 'title',
                value: 'Paradiddle-Diddle Combination',
                type: 'string',
                position: 1
              },
              {
                id: 235712,
                content_id: 210493,
                key: 'soundslice_slug',
                value: '170415',
                type: 'string',
                position: 1
              }
            ],
            data: [
              {
                id: 67657,
                content_id: 210493,
                key: 'soundslice_xml_file_url',
                value: 'https://d1923uyy6spedc.cloudfront.net/ex15p.musicxml',
                position: 1
              },
              {
                id: 67658,
                content_id: 210493,
                key: 'sheet_music_image_url',
                value:
                  'https://d1923uyy6spedc.cloudfront.net/ex15p---check.svg',
                position: 1
              }
            ],
            permissions: []
          },
          type: 'content',
          position: 15
        },
        {
          key: 'difficulty',
          value: 'all',
          type: 'string',
          position: 1
        }
      ],
      data: [
        {
          id: 75592,
          content_id: 213233,
          key: 'description',
          value:
            'This is an introduction to the paradiddle family of rudiments.',
          position: 1
        },
        {
          id: 75593,
          content_id: 213233,
          key: 'thumbnail_url',
          value:
            'https://dzryyo1we6bm3.cloudfront.net/hudson-packs/great-hands-for-a-lifetime/ghfal-33-paradiddle-family.jpg',
          position: 1
        },
        {
          id: 75594,
          content_id: 213233,
          key: 'original_thumbnail_url',
          value:
            'https://dzryyo1we6bm3.cloudfront.net/hudson-packs/great-hands-for-a-lifetime/original_thumbnails/ghfal-33-paradiddle-family.jpg',
          position: 1
        }
      ],
      permissions: [
        {
          id: 42,
          content_id: 213233,
          content_type: null,
          permission_id: 42,
          brand: 'drumeo',
          name: 'Great Hands For A Lifetime'
        }
      ],
      child_ids: [213233],
      position: 1,
      user_progress: {
        '149628': {
          id: 9285445,
          content_id: 213233,
          user_id: 149628,
          state: 'started',
          progress_percent: 0,
          higher_key_progress: null,
          updated_on: '2020-08-05 06:33:46'
        }
      },
      completed: false,
      started: true,
      progress_percent: 0,
      user_playlists: {
        '149628': [
          {
            id: 186385,
            slug: 'primary-playlist',
            type: 'user-playlist',
            sort: 0,
            status: 'published',
            language: 'en-US',
            brand: 'drumeo',
            total_xp: '34677',
            published_on: '2017-12-13 17:27:17',
            created_on: '2017-12-13 17:27:17',
            archived_on: null,
            child_position: 1,
            child_id: 213233,
            parent_id: 186385
          }
        ]
      },
      is_added_to_primary_playlist: true,
      published_on_in_timezone: {
        date: '2018-09-25 11:59:31.000000',
        timezone_type: 3,
        timezone: 'America/Los_Angeles'
      },
      is_new: false,
      mobile_app_url:
        'https://staging.drumeo.com/laravel/public/api/members/pack/lesson/213233',
      url:
        'https://staging.drumeo.com/laravel/public/members/packs/great-hands-for-a-lifetime/paradiddles/paradiddle-family',
      xp: 150,
      xp_bonus: 150
    }
  ],
  next_content_type: 'bundle',
  is_owned: true,
  bundle_count: 5,
  parent: {
    id: 213232,
    slug: 'paradiddles',
    type: 'pack-bundle',
    sort: 0,
    status: 'published',
    language: 'en-US',
    brand: 'drumeo',
    total_xp: null,
    published_on: '2018-09-25 18:59:31',
    created_on: '2018-09-25 18:59:31',
    archived_on: null,
    parent_id: 213232,
    child_id: 213233,
    fields: [
      {
        id: 242121,
        content_id: 213232,
        key: 'title',
        value: 'Paradiddles',
        type: 'string',
        position: 1
      },
      {
        key: 'difficulty',
        value: 'all',
        type: 'string',
        position: 1
      }
    ],
    data: [
      {
        id: 75589,
        content_id: 213232,
        key: 'description',
        value: 'This section will focus on paradiddle rudiments.',
        position: 1
      },
      {
        id: 75590,
        content_id: 213232,
        key: 'thumbnail_url',
        value:
          'https://dzryyo1we6bm3.cloudfront.net/hudson-packs/great-hands-for-a-lifetime/ghfal-dvd-3-paradiddles.jpg',
        position: 1
      },
      {
        id: 75591,
        content_id: 213232,
        key: 'original_thumbnail_url',
        value:
          'https://dzryyo1we6bm3.cloudfront.net/hudson-packs/great-hands-for-a-lifetime/original_thumbnails/ghfal-dvd-3-paradiddles.jpg',
        position: 1
      }
    ],
    permissions: [
      {
        id: 42,
        content_id: 213232,
        content_type: null,
        permission_id: 42,
        brand: 'drumeo',
        name: 'Great Hands For A Lifetime'
      }
    ],
    child_ids: [213233],
    position: 1,
    user_progress: {
      '149628': {
        id: 9285446,
        content_id: 213232,
        user_id: 149628,
        state: 'started',
        progress_percent: 0,
        higher_key_progress: null,
        updated_on: '2020-08-05 06:33:46'
      }
    },
    completed: false,
    started: true,
    progress_percent: 0,
    user_playlists: {
      '149628': []
    },
    is_added_to_primary_playlist: false,
    published_on_in_timezone: {
      date: '2018-09-25 11:59:31.000000',
      timezone_type: 3,
      timezone: 'America/Los_Angeles'
    },
    is_new: false,
    current_lesson: {
      id: 213249,
      slug: 'flams-drags-additional-elements',
      type: 'pack-bundle',
      sort: 0,
      status: 'published',
      language: 'en-US',
      brand: 'drumeo',
      total_xp: null,
      published_on: '2018-09-25 18:59:33',
      created_on: '2018-09-25 18:59:33',
      archived_on: null,
      parent_id: null,
      child_id: null,
      fields: [
        {
          id: 242169,
          content_id: 213249,
          key: 'title',
          value: 'Flams, Drags, & Additional Elements',
          type: 'string',
          position: 1
        },
        {
          key: 'difficulty',
          value: 'all',
          type: 'string',
          position: 1
        }
      ],
      data: [
        {
          id: 75616,
          content_id: 213249,
          key: 'description',
          value:
            "This section will focus on flam and drag rudiments. You'll also learn some additional patterns used in the Lifetime Warmup.",
          position: 1
        },
        {
          id: 75617,
          content_id: 213249,
          key: 'thumbnail_url',
          value:
            'https://dzryyo1we6bm3.cloudfront.net/hudson-packs/great-hands-for-a-lifetime/ghfal-dvd-4-flams-drags-&-additional-elements.jpg',
          position: 1
        },
        {
          id: 75618,
          content_id: 213249,
          key: 'original_thumbnail_url',
          value:
            'https://dzryyo1we6bm3.cloudfront.net/hudson-packs/great-hands-for-a-lifetime/original_thumbnails/ghfal-dvd-4-flams-drags-&-additional-elements.jpg',
          position: 1
        }
      ],
      permissions: [
        {
          id: 42,
          content_id: 213249,
          content_type: null,
          permission_id: 42,
          brand: 'drumeo',
          name: 'Great Hands For A Lifetime'
        }
      ],
      user_progress: {
        '149628': []
      },
      completed: false,
      started: false,
      progress_percent: 0,
      user_playlists: {
        '149628': []
      },
      is_added_to_primary_playlist: false,
      published_on_in_timezone: {
        date: '2018-09-25 11:59:33.000000',
        timezone_type: 3,
        timezone: 'America/Los_Angeles'
      },
      is_new: false,
      lesson_count: 5,
      mobile_app_url:
        'https://staging.drumeo.com/laravel/public/api/members/pack/bundle/213249'
    }
  },
  next_lesson: null,
  previous_lesson: null,
  showType: 'show-part'
};
