import Download_V2, { offlineContent } from './src/Download_V2';
import DownloadResources from './src/DownloadResources';

export default Download_V2;
export { DownloadResources, offlineContent };
export const videoMock = {
  id: 263378,
  slug: 'introduction',
  type: 'course-part',
  sort: 0,
  status: 'published',
  language: 'en-US',
  brand: 'drumeo',
  total_xp: '200',
  published_on: '2020-07-25 15:00:00',
  created_on: '2020-07-21 10:50:54',
  archived_on: null,
  parent_id: 262502,
  child_id: null,
  fields: [
    {
      id: 358419,
      content_id: 263378,
      key: 'show_in_new_feed',
      value: '1',
      type: 'boolean',
      position: 1
    },
    {
      id: 358420,
      content_id: 263378,
      key: 'title',
      value: 'Introduction',
      type: 'string',
      position: 1
    },
    {
      id: 358574,
      content_id: 263378,
      key: 'xp',
      value: '200',
      type: 'integer',
      position: 1
    },
    {
      id: 358575,
      content_id: 263378,
      key: 'tag',
      value: 'intro',
      type: 'string',
      position: 1
    },
    {
      id: 358573,
      content_id: 263378,
      key: 'video',
      value: {
        id: 263490,
        slug: 'vimeo-video-440749961',
        type: 'vimeo-video',
        sort: 0,
        status: 'published',
        language: 'en-US',
        brand: 'drumeo',
        total_xp: '150',
        published_on: '2020-07-22 18:30:19',
        created_on: '2020-07-22 18:30:19',
        archived_on: null,
        parent_id: null,
        child_id: null,
        fields: [
          {
            id: 358505,
            content_id: 263490,
            key: 'vimeo_video_id',
            value: '440749961',
            type: 'string',
            position: 1
          },
          {
            id: 358506,
            content_id: 263490,
            key: 'length_in_seconds',
            value: '109',
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
    { key: 'difficulty', value: 'all', type: 'string', position: 1 }
  ],
  data: [
    {
      id: 142648,
      content_id: 263378,
      key: 'original_thumbnail_url',
      value:
        'https://d1923uyy6spedc.cloudfront.net/263378-card-thumbnail-maxres-1595685270.png',
      position: 1
    },
    {
      id: 142649,
      content_id: 263378,
      key: 'thumbnail_url',
      value:
        'https://d1923uyy6spedc.cloudfront.net/263378-card-thumbnail-1595685275.png',
      position: 1
    },
    {
      id: 142650,
      content_id: 263378,
      key: 'description',
      value:
        'Daru explains his approach to playing drums, and how his style is identifiably unique. Soul Hop is his way of combining two of his biggest influences: soul music and hip-hop.',
      position: 1
    }
  ],
  permissions: [
    {
      id: 1,
      content_id: null,
      content_type: 'course-part',
      permission_id: 1,
      brand: 'drumeo',
      name: 'Drumeo Edge'
    }
  ],
  user_progress: {
    149628: {
      id: 9285216,
      content_id: 263378,
      user_id: 149628,
      state: 'started',
      progress_percent: 0,
      higher_key_progress: null,
      updated_on: '2020-08-03 11:03:19'
    }
  },
  completed: false,
  started: true,
  progress_percent: 0,
  user_playlists: { 149628: [] },
  is_added_to_primary_playlist: false,
  published_on_in_timezone: {
    date: '2020-07-25 08:00:00.000000',
    timezone_type: 3,
    timezone: 'America/Los_Angeles'
  },
  is_new: false,
  url:
    'https://staging.drumeo.com/laravel/public/members/lessons/course-part/263378',
  stbs: [],
  xp: 200,
  xp_bonus: '200',
  length_in_seconds: '109',
  last_watch_position_in_seconds: 0,
  like_count: 8,
  parent: {
    id: 262502,
    slug: 'the-soul-hop-grooves-of-daru-jones',
    type: 'course',
    sort: 0,
    status: 'published',
    language: 'en-US',
    brand: 'drumeo',
    total_xp: '1850',
    published_on: '2020-07-25 15:00:00',
    created_on: '2020-07-09 10:05:04',
    archived_on: null,
    parent_id: 262502,
    child_id: 263378,
    fields: [
      {
        id: 358418,
        content_id: 262502,
        key: 'topic',
        value: 'Beats',
        type: 'string',
        position: 1
      },
      {
        id: 358681,
        content_id: 262502,
        key: 'tag',
        value: 'advanced',
        type: 'string',
        position: 1
      },
      {
        id: 357421,
        content_id: 262502,
        key: 'show_in_new_feed',
        value: '1',
        type: 'boolean',
        position: 1
      },
      {
        id: 357422,
        content_id: 262502,
        key: 'title',
        value: 'The Soul Hop Grooves Of Daru Jones',
        type: 'string',
        position: 1
      },
      {
        id: 357423,
        content_id: 262502,
        key: 'difficulty',
        value: '7',
        type: 'string',
        position: 1
      },
      {
        id: 357424,
        content_id: 262502,
        key: 'xp',
        value: '500',
        type: 'integer',
        position: 1
      },
      {
        id: 357425,
        content_id: 262502,
        key: 'instructor',
        value: {
          id: 220967,
          slug: 'daru-jones',
          type: 'instructor',
          sort: 0,
          status: 'published',
          language: 'en-US',
          brand: 'drumeo',
          total_xp: null,
          published_on: '2019-02-26 16:02:50',
          created_on: '2019-02-26 16:02:12',
          archived_on: null,
          parent_id: null,
          child_id: null,
          fields: [
            {
              id: 261271,
              content_id: 220967,
              key: 'title',
              value: 'Daru Jones',
              type: 'string',
              position: 1
            },
            {
              id: 261272,
              content_id: 220967,
              key: 'name',
              value: 'Daru Jones',
              type: 'string',
              position: 1
            }
          ],
          data: [
            {
              id: 109626,
              content_id: 220967,
              key: 'head_shot_picture_url',
              value:
                'https://d1923uyy6spedc.cloudfront.net/220967-avatar-1572358845.jpg',
              position: 1
            },
            {
              id: 109627,
              content_id: 220967,
              key: 'biography',
              value:
                'Daru Jones is a Grammy-award winner with an impressive level of experience performing and recording, and producing at the highest level through his own label: Rusic Records. He has worked with incredible artists and producers, such as Jack White, Slum Village, Talib Kweli, Black Milk, Dwight Yoakam, Jamie Lidell, Pete Rock, Salaam Remi, Gloria Gaynor, Kim Burrell, Q-Tip, Mos Def, and Lorenzo Jovanotti, just to name a few. This level of exposure has led him to play on coveted stages, including One Mic: Hip-Hop Culture Worldwide, the 2013 Grammy Awards, Austin City Limits, Rock The Bells Festival, Montreux Jazz Festival, The David Letterman Show, Jools Holland, The Colbert Report, Saturday Night Live, and MTV. ',
              position: 1
            }
          ],
          permissions: []
        },
        type: 'content',
        position: 1
      }
    ],
    data: [
      {
        id: 142377,
        content_id: 262502,
        key: 'description',
        value:
          '<p>Daru Jones is a one-of-a-kind musician, and this course will take you through some of his most iconic drum grooves executed in his very unique soul hop style.</p>',
        position: 1
      },
      {
        id: 142646,
        content_id: 262502,
        key: 'original_thumbnail_url',
        value:
          'https://d1923uyy6spedc.cloudfront.net/262502-card-thumbnail-maxres-1595862611.png',
        position: 1
      },
      {
        id: 142647,
        content_id: 262502,
        key: 'thumbnail_url',
        value:
          'https://d1923uyy6spedc.cloudfront.net/262502-card-thumbnail-maxres-1595862611.png',
        position: 1
      },
      {
        id: 142684,
        content_id: 262502,
        key: 'resource_name',
        value: 'Course Resources Folder',
        position: 1
      },
      {
        id: 142685,
        content_id: 262502,
        key: 'resource_url',
        value:
          'https://s3.amazonaws.com/drumeo/courses/resource-files/dca-14-the-soul-hop-grooves-of-daru-jones.zip',
        position: 1
      }
    ],
    permissions: [
      {
        id: 1,
        content_id: null,
        content_type: 'course',
        permission_id: 1,
        brand: 'drumeo',
        name: 'Drumeo Edge'
      }
    ],
    child_ids: [263378],
    position: 1,
    user_progress: {
      149628: {
        id: 9285217,
        content_id: 262502,
        user_id: 149628,
        state: 'started',
        progress_percent: 0,
        higher_key_progress: null,
        updated_on: '2020-08-03 11:03:19'
      }
    },
    completed: false,
    started: true,
    progress_percent: 0,
    user_playlists: { 149628: [] },
    is_added_to_primary_playlist: false,
    published_on_in_timezone: {
      date: '2020-07-25 08:00:00.000000',
      timezone_type: 3,
      timezone: 'America/Los_Angeles'
    },
    is_new: false,
    resources: {
      1: {
        resource_id: 142684,
        resource_name: 'Course Resources Folder',
        resource_url:
          'https://s3.amazonaws.com/drumeo/courses/resource-files/dca-14-the-soul-hop-grooves-of-daru-jones.zip'
      }
    },
    url:
      'https://staging.drumeo.com/laravel/public/members/lessons/courses/262502',
    lesson_count: 6,
    duration: 1787,
    xp: 1850,
    xp_bonus: '500',
    lessons: [
      {
        id: 263378,
        slug: 'introduction',
        type: 'course-part',
        sort: 0,
        status: 'published',
        language: 'en-US',
        brand: 'drumeo',
        total_xp: '200',
        published_on: '2020-07-25 15:00:00',
        created_on: '2020-07-21 10:50:54',
        archived_on: null,
        parent_id: 262502,
        child_id: 263378,
        fields: [
          {
            id: 358419,
            content_id: 263378,
            key: 'show_in_new_feed',
            value: '1',
            type: 'boolean',
            position: 1
          },
          {
            id: 358420,
            content_id: 263378,
            key: 'title',
            value: 'Introduction',
            type: 'string',
            position: 1
          },
          {
            id: 358574,
            content_id: 263378,
            key: 'xp',
            value: '200',
            type: 'integer',
            position: 1
          },
          {
            id: 358575,
            content_id: 263378,
            key: 'tag',
            value: 'intro',
            type: 'string',
            position: 1
          },
          {
            id: 358573,
            content_id: 263378,
            key: 'video',
            value: {
              id: 263490,
              slug: 'vimeo-video-440749961',
              type: 'vimeo-video',
              sort: 0,
              status: 'published',
              language: 'en-US',
              brand: 'drumeo',
              total_xp: '150',
              published_on: '2020-07-22 18:30:19',
              created_on: '2020-07-22 18:30:19',
              archived_on: null,
              parent_id: null,
              child_id: null,
              fields: [
                {
                  id: 358505,
                  content_id: 263490,
                  key: 'vimeo_video_id',
                  value: '440749961',
                  type: 'string',
                  position: 1
                },
                {
                  id: 358506,
                  content_id: 263490,
                  key: 'length_in_seconds',
                  value: '109',
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
          { key: 'difficulty', value: 'all', type: 'string', position: 1 }
        ],
        data: [
          {
            id: 142648,
            content_id: 263378,
            key: 'original_thumbnail_url',
            value:
              'https://d1923uyy6spedc.cloudfront.net/263378-card-thumbnail-maxres-1595685270.png',
            position: 1
          },
          {
            id: 142649,
            content_id: 263378,
            key: 'thumbnail_url',
            value:
              'https://d1923uyy6spedc.cloudfront.net/263378-card-thumbnail-1595685275.png',
            position: 1
          },
          {
            id: 142650,
            content_id: 263378,
            key: 'description',
            value:
              '<p>Daru explains his approach to playing drums, and how his style is identifiably unique. Soul Hop is his way of combining two of his biggest influences: soul music and hip-hop.</p>',
            position: 1
          }
        ],
        permissions: [
          {
            id: 1,
            content_id: null,
            content_type: 'course-part',
            permission_id: 1,
            brand: 'drumeo',
            name: 'Drumeo Edge'
          }
        ],
        child_ids: [263378],
        position: 1,
        user_progress: {
          149628: {
            id: 9285216,
            content_id: 263378,
            user_id: 149628,
            state: 'started',
            progress_percent: 0,
            higher_key_progress: null,
            updated_on: '2020-08-03 11:03:19'
          }
        },
        completed: false,
        started: true,
        progress_percent: 0,
        user_playlists: { 149628: [] },
        is_added_to_primary_playlist: false,
        published_on_in_timezone: {
          date: '2020-07-25 08:00:00.000000',
          timezone_type: 3,
          timezone: 'America/Los_Angeles'
        },
        is_new: false,
        assignments: [],
        url:
          'https://staging.drumeo.com/laravel/public/members/lessons/course-part/263378',
        stbs: [],
        xp: 200,
        xp_bonus: '200',
        length_in_seconds: '109',
        last_watch_position_in_seconds: 0,
        like_count: 8
      },
      {
        id: 263379,
        slug: 'jack-white-lazaretto',
        type: 'course-part',
        sort: 0,
        status: 'published',
        language: 'en-US',
        brand: 'drumeo',
        total_xp: '225',
        published_on: '2020-07-25 15:00:00',
        created_on: '2020-07-21 10:51:39',
        archived_on: null,
        parent_id: 262502,
        child_id: 263379,
        fields: [
          {
            id: 358421,
            content_id: 263379,
            key: 'show_in_new_feed',
            value: '1',
            type: 'boolean',
            position: 1
          },
          {
            id: 358422,
            content_id: 263379,
            key: 'title',
            value: 'Jack White - "Lazaretto"',
            type: 'string',
            position: 1
          },
          {
            id: 358570,
            content_id: 263379,
            key: 'xp',
            value: '200',
            type: 'integer',
            position: 1
          },
          {
            id: 358572,
            content_id: 263379,
            key: 'tag',
            value: 'lazareto',
            type: 'string',
            position: 1
          },
          {
            id: 358571,
            content_id: 263379,
            key: 'video',
            value: {
              id: 263489,
              slug: 'vimeo-video-440750008',
              type: 'vimeo-video',
              sort: 0,
              status: 'published',
              language: 'en-US',
              brand: 'drumeo',
              total_xp: '150',
              published_on: '2020-07-22 18:30:18',
              created_on: '2020-07-22 18:30:18',
              archived_on: null,
              parent_id: null,
              child_id: null,
              fields: [
                {
                  id: 358503,
                  content_id: 263489,
                  key: 'vimeo_video_id',
                  value: '440750008',
                  type: 'string',
                  position: 1
                },
                {
                  id: 358504,
                  content_id: 263489,
                  key: 'length_in_seconds',
                  value: '201',
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
          { key: 'difficulty', value: 'all', type: 'string', position: 1 }
        ],
        data: [
          {
            id: 142651,
            content_id: 263379,
            key: 'original_thumbnail_url',
            value:
              'https://d1923uyy6spedc.cloudfront.net/263379-card-thumbnail-maxres-1595685448.png',
            position: 1
          },
          {
            id: 142652,
            content_id: 263379,
            key: 'thumbnail_url',
            value:
              'https://d1923uyy6spedc.cloudfront.net/263379-card-thumbnail-1595685452.png',
            position: 1
          },
          {
            id: 142661,
            content_id: 263379,
            key: 'resource_name',
            value: 'PDF Sheet Music',
            position: 1
          },
          {
            id: 142662,
            content_id: 263379,
            key: 'resource_url',
            value:
              'https://s3.amazonaws.com/drumeo/courses/pdf/dca-14-the-soul-hop-grooves-of-daru-jones/dca-14b-Lazaretto.pdf',
            position: 1
          },
          {
            id: 142523,
            content_id: 263379,
            key: 'description',
            value:
              "<p>Check out Daru's signature groove from the title track off of Jack White's 2014 Grammy winning album.</p>",
            position: 1
          }
        ],
        permissions: [
          {
            id: 1,
            content_id: null,
            content_type: 'course-part',
            permission_id: 1,
            brand: 'drumeo',
            name: 'Drumeo Edge'
          }
        ],
        child_ids: [263379],
        position: 2,
        user_progress: { 149628: [] },
        completed: false,
        started: false,
        progress_percent: 0,
        user_playlists: { 149628: [] },
        is_added_to_primary_playlist: false,
        published_on_in_timezone: {
          date: '2020-07-25 08:00:00.000000',
          timezone_type: 3,
          timezone: 'America/Los_Angeles'
        },
        is_new: false,
        resources: {
          1: {
            resource_id: 142661,
            resource_name: 'PDF Sheet Music',
            resource_url:
              'https://s3.amazonaws.com/drumeo/courses/pdf/dca-14-the-soul-hop-grooves-of-daru-jones/dca-14b-Lazaretto.pdf'
          }
        },
        assignments: [
          {
            id: 263692,
            slug: 'jack-white-lazaretto',
            type: 'assignment',
            sort: 0,
            status: 'published',
            language: 'en-US',
            brand: 'drumeo',
            total_xp: '25',
            published_on: '2020-07-25 14:23:25',
            created_on: '2020-07-25 14:23:28',
            archived_on: null,
            parent_id: null,
            child_id: null,
            fields: [
              {
                id: 358682,
                content_id: 263692,
                key: 'show_in_new_feed',
                value: '1',
                type: 'boolean',
                position: 1
              },
              {
                id: 358683,
                content_id: 263692,
                key: 'title',
                value: 'Jack White - "Lazaretto"',
                type: 'string',
                position: 1
              },
              {
                id: 358684,
                content_id: 263692,
                key: 'xp',
                value: '25',
                type: 'integer',
                position: 1
              },
              {
                id: 358904,
                content_id: 263692,
                key: 'soundslice_xml_file_url',
                value:
                  'https://d1923uyy6spedc.cloudfront.net/263692-soundslice-xml-file-1595857857.musicxml',
                type: 'string',
                position: 1
              },
              {
                id: 358905,
                content_id: 263692,
                key: 'soundslice_slug',
                value: '434924',
                type: 'string',
                position: 1
              },
              { key: 'difficulty', value: 'all', type: 'string', position: 1 }
            ],
            data: [
              {
                id: 142671,
                content_id: 263692,
                key: 'sheet_music_image_url',
                value:
                  'https://d1923uyy6spedc.cloudfront.net/263692-sheet-image-1595687036.svg',
                position: 1
              }
            ],
            permissions: [],
            user_progress: { 149628: [] },
            completed: false,
            started: false,
            progress_percent: 0,
            user_playlists: { 149628: [] },
            is_added_to_primary_playlist: false,
            published_on_in_timezone: {
              date: '2020-07-25 07:23:25.000000',
              timezone_type: 3,
              timezone: 'America/Los_Angeles'
            },
            is_new: false,
            xp: 25,
            like_count: 0
          }
        ],
        xp: 225,
        url:
          'https://staging.drumeo.com/laravel/public/members/lessons/course-part/263379',
        stbs: [],
        xp_bonus: '200',
        length_in_seconds: '201',
        last_watch_position_in_seconds: 0,
        like_count: 8
      },
      {
        id: 263380,
        slug: 'ruff-pack-with-you',
        type: 'course-part',
        sort: 0,
        status: 'published',
        language: 'en-US',
        brand: 'drumeo',
        total_xp: '225',
        published_on: '2020-07-25 15:00:00',
        created_on: '2020-07-21 10:52:27',
        archived_on: null,
        parent_id: 262502,
        child_id: 263380,
        fields: [
          {
            id: 358423,
            content_id: 263380,
            key: 'show_in_new_feed',
            value: '1',
            type: 'boolean',
            position: 1
          },
          {
            id: 358424,
            content_id: 263380,
            key: 'title',
            value: 'The Ruff Pack - "With You"',
            type: 'string',
            position: 1
          },
          {
            id: 358564,
            content_id: 263380,
            key: 'xp',
            value: '200',
            type: 'integer',
            position: 1
          },
          {
            id: 358565,
            content_id: 263380,
            key: 'tag',
            value: '2012',
            type: 'string',
            position: 1
          },
          {
            id: 358566,
            content_id: 263380,
            key: 'tag',
            value: 'ruf',
            type: 'string',
            position: 2
          },
          {
            id: 358567,
            content_id: 263380,
            key: 'tag',
            value: 'pac',
            type: 'string',
            position: 3
          },
          {
            id: 358563,
            content_id: 263380,
            key: 'video',
            value: {
              id: 263486,
              slug: 'vimeo-video-440750107',
              type: 'vimeo-video',
              sort: 0,
              status: 'published',
              language: 'en-US',
              brand: 'drumeo',
              total_xp: '150',
              published_on: '2020-07-22 18:30:18',
              created_on: '2020-07-22 18:30:18',
              archived_on: null,
              parent_id: null,
              child_id: null,
              fields: [
                {
                  id: 358501,
                  content_id: 263486,
                  key: 'vimeo_video_id',
                  value: '440750107',
                  type: 'string',
                  position: 1
                },
                {
                  id: 358502,
                  content_id: 263486,
                  key: 'length_in_seconds',
                  value: '179',
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
          { key: 'difficulty', value: 'all', type: 'string', position: 1 }
        ],
        data: [
          {
            id: 142653,
            content_id: 263380,
            key: 'original_thumbnail_url',
            value:
              'https://d1923uyy6spedc.cloudfront.net/263380-card-thumbnail-maxres-1595685567.png',
            position: 1
          },
          {
            id: 142654,
            content_id: 263380,
            key: 'thumbnail_url',
            value:
              'https://d1923uyy6spedc.cloudfront.net/263380-card-thumbnail-1595685571.png',
            position: 1
          },
          {
            id: 142663,
            content_id: 263380,
            key: 'resource_name',
            value: 'PDF Sheet Music',
            position: 1
          },
          {
            id: 142664,
            content_id: 263380,
            key: 'resource_url',
            value:
              'https://d1923uyy6spedc.cloudfront.net/263380-resource-1595686317.pdf',
            position: 1
          },
          {
            id: 142522,
            content_id: 263380,
            key: 'description',
            value:
              '<p>Ruff Pack is a New York City based group that blends hip hop and jazz influences.</p>',
            position: 1
          }
        ],
        permissions: [
          {
            id: 1,
            content_id: null,
            content_type: 'course-part',
            permission_id: 1,
            brand: 'drumeo',
            name: 'Drumeo Edge'
          }
        ],
        child_ids: [263380],
        position: 3,
        user_progress: { 149628: [] },
        completed: false,
        started: false,
        progress_percent: 0,
        user_playlists: { 149628: [] },
        is_added_to_primary_playlist: false,
        published_on_in_timezone: {
          date: '2020-07-25 08:00:00.000000',
          timezone_type: 3,
          timezone: 'America/Los_Angeles'
        },
        is_new: false,
        resources: {
          1: {
            resource_id: 142663,
            resource_name: 'PDF Sheet Music',
            resource_url:
              'https://d1923uyy6spedc.cloudfront.net/263380-resource-1595686317.pdf'
          }
        },
        assignments: [
          {
            id: 263693,
            slug: 'the-ruff-pack-with-you',
            type: 'assignment',
            sort: 0,
            status: 'published',
            language: 'en-US',
            brand: 'drumeo',
            total_xp: '25',
            published_on: '2020-07-25 14:25:12',
            created_on: '2020-07-25 14:25:14',
            archived_on: null,
            parent_id: null,
            child_id: null,
            fields: [
              {
                id: 358685,
                content_id: 263693,
                key: 'show_in_new_feed',
                value: '1',
                type: 'boolean',
                position: 1
              },
              {
                id: 358686,
                content_id: 263693,
                key: 'title',
                value: 'The Ruff Pack - "With You"',
                type: 'string',
                position: 1
              },
              {
                id: 358687,
                content_id: 263693,
                key: 'xp',
                value: '25',
                type: 'integer',
                position: 1
              },
              {
                id: 358906,
                content_id: 263693,
                key: 'soundslice_xml_file_url',
                value:
                  'https://d1923uyy6spedc.cloudfront.net/263693-soundslice-xml-file-1595858201.musicxml',
                type: 'string',
                position: 1
              },
              {
                id: 358907,
                content_id: 263693,
                key: 'soundslice_slug',
                value: '434942',
                type: 'string',
                position: 1
              },
              { key: 'difficulty', value: 'all', type: 'string', position: 1 }
            ],
            data: [
              {
                id: 142672,
                content_id: 263693,
                key: 'sheet_music_image_url',
                value:
                  'https://d1923uyy6spedc.cloudfront.net/263693-sheet-image-1595687178.svg',
                position: 1
              }
            ],
            permissions: [],
            user_progress: { 149628: [] },
            completed: false,
            started: false,
            progress_percent: 0,
            user_playlists: { 149628: [] },
            is_added_to_primary_playlist: false,
            published_on_in_timezone: {
              date: '2020-07-25 07:25:12.000000',
              timezone_type: 3,
              timezone: 'America/Los_Angeles'
            },
            is_new: false,
            xp: 25,
            like_count: 0
          }
        ],
        xp: 225,
        url:
          'https://staging.drumeo.com/laravel/public/members/lessons/course-part/263380',
        stbs: [],
        xp_bonus: '200',
        length_in_seconds: '179',
        last_watch_position_in_seconds: 0,
        like_count: 4
      },
      {
        id: 263381,
        slug: 'black-milk-keep-goin',
        type: 'course-part',
        sort: 0,
        status: 'published',
        language: 'en-US',
        brand: 'drumeo',
        total_xp: '250',
        published_on: '2020-07-25 15:00:00',
        created_on: '2020-07-21 10:53:33',
        archived_on: null,
        parent_id: 262502,
        child_id: 263381,
        fields: [
          {
            id: 358425,
            content_id: 263381,
            key: 'show_in_new_feed',
            value: '1',
            type: 'boolean',
            position: 1
          },
          {
            id: 358426,
            content_id: 263381,
            key: 'title',
            value: 'Black Milk - "Keep Going"',
            type: 'string',
            position: 1
          },
          {
            id: 358559,
            content_id: 263381,
            key: 'xp',
            value: '200',
            type: 'integer',
            position: 1
          },
          {
            id: 358561,
            content_id: 263381,
            key: 'tag',
            value: 'goin',
            type: 'string',
            position: 1
          },
          {
            id: 358562,
            content_id: 263381,
            key: 'tag',
            value: "goin'",
            type: 'string',
            position: 2
          },
          {
            id: 358560,
            content_id: 263381,
            key: 'video',
            value: {
              id: 263497,
              slug: 'vimeo-video-440754098',
              type: 'vimeo-video',
              sort: 0,
              status: 'published',
              language: 'en-US',
              brand: 'drumeo',
              total_xp: '150',
              published_on: '2020-07-22 19:00:54',
              created_on: '2020-07-22 19:00:54',
              archived_on: null,
              parent_id: null,
              child_id: null,
              fields: [
                {
                  id: 358515,
                  content_id: 263497,
                  key: 'vimeo_video_id',
                  value: '440754098',
                  type: 'string',
                  position: 1
                },
                {
                  id: 358516,
                  content_id: 263497,
                  key: 'length_in_seconds',
                  value: '443',
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
          { key: 'difficulty', value: 'all', type: 'string', position: 1 }
        ],
        data: [
          {
            id: 142655,
            content_id: 263381,
            key: 'original_thumbnail_url',
            value:
              'https://d1923uyy6spedc.cloudfront.net/263381-card-thumbnail-maxres-1595685671.png',
            position: 1
          },
          {
            id: 142656,
            content_id: 263381,
            key: 'thumbnail_url',
            value:
              'https://d1923uyy6spedc.cloudfront.net/263381-card-thumbnail-1595685676.png',
            position: 1
          },
          {
            id: 142665,
            content_id: 263381,
            key: 'resource_name',
            value: 'PDF Sheet Music',
            position: 1
          },
          {
            id: 142666,
            content_id: 263381,
            key: 'resource_url',
            value:
              'https://s3.amazonaws.com/drumeo/courses/pdf/dca-14-the-soul-hop-grooves-of-daru-jones/dca-14d-Keep-Goin-Black-Milk.pdf',
            position: 1
          },
          {
            id: 142673,
            content_id: 263381,
            key: 'chapter_timecode',
            value: '119',
            position: 1
          },
          {
            id: 142674,
            content_id: 263381,
            key: 'chapter_description',
            value: 'Pattern #1',
            position: 1
          },
          {
            id: 142521,
            content_id: 263381,
            key: 'description',
            value:
              "<p>This track is featured on Black Milk's 2010 release: <em>Album of the Year.</em></p>",
            position: 1
          },
          {
            id: 142675,
            content_id: 263381,
            key: 'chapter_timecode',
            value: '150',
            position: 2
          },
          {
            id: 142676,
            content_id: 263381,
            key: 'chapter_description',
            value: 'Pattern #2',
            position: 2
          }
        ],
        permissions: [
          {
            id: 1,
            content_id: null,
            content_type: 'course-part',
            permission_id: 1,
            brand: 'drumeo',
            name: 'Drumeo Edge'
          }
        ],
        child_ids: [263381],
        position: 4,
        user_progress: { 149628: [] },
        completed: false,
        started: false,
        progress_percent: 0,
        user_playlists: { 149628: [] },
        is_added_to_primary_playlist: false,
        published_on_in_timezone: {
          date: '2020-07-25 08:00:00.000000',
          timezone_type: 3,
          timezone: 'America/Los_Angeles'
        },
        is_new: false,
        resources: {
          1: {
            resource_id: 142665,
            resource_name: 'PDF Sheet Music',
            resource_url:
              'https://s3.amazonaws.com/drumeo/courses/pdf/dca-14-the-soul-hop-grooves-of-daru-jones/dca-14d-Keep-Goin-Black-Milk.pdf'
          }
        },
        chapters: [
          { chapter_timecode: '119', chapter_description: 'Pattern #1' },
          { chapter_timecode: '150', chapter_description: 'Pattern #2' }
        ],
        assignments: [
          {
            id: 263695,
            slug: '1',
            type: 'assignment',
            sort: 0,
            status: 'published',
            language: 'en-US',
            brand: 'drumeo',
            total_xp: '25',
            published_on: '2020-07-25 14:31:36',
            created_on: '2020-07-25 14:31:39',
            archived_on: null,
            parent_id: null,
            child_id: null,
            fields: [
              {
                id: 358688,
                content_id: 263695,
                key: 'show_in_new_feed',
                value: '1',
                type: 'boolean',
                position: 1
              },
              {
                id: 358689,
                content_id: 263695,
                key: 'title',
                value: '#1',
                type: 'string',
                position: 1
              },
              {
                id: 358692,
                content_id: 263695,
                key: 'xp',
                value: '25',
                type: 'integer',
                position: 1
              },
              {
                id: 358908,
                content_id: 263695,
                key: 'soundslice_xml_file_url',
                value:
                  'https://d1923uyy6spedc.cloudfront.net/263695-soundslice-xml-file-1595858393.musicxml',
                type: 'string',
                position: 1
              },
              {
                id: 358909,
                content_id: 263695,
                key: 'soundslice_slug',
                value: '434944',
                type: 'string',
                position: 1
              },
              { key: 'difficulty', value: 'all', type: 'string', position: 1 }
            ],
            data: [
              {
                id: 142677,
                content_id: 263695,
                key: 'timecode',
                value: '119',
                position: 1
              },
              {
                id: 142678,
                content_id: 263695,
                key: 'sheet_music_image_url',
                value:
                  'https://d1923uyy6spedc.cloudfront.net/263695-sheet-image-1595687556.svg',
                position: 1
              }
            ],
            permissions: [],
            user_progress: { 149628: [] },
            completed: false,
            started: false,
            progress_percent: 0,
            user_playlists: { 149628: [] },
            is_added_to_primary_playlist: false,
            published_on_in_timezone: {
              date: '2020-07-25 07:31:36.000000',
              timezone_type: 3,
              timezone: 'America/Los_Angeles'
            },
            is_new: false,
            xp: 25,
            like_count: 0
          },
          {
            id: 263696,
            slug: '2',
            type: 'assignment',
            sort: 0,
            status: 'published',
            language: 'en-US',
            brand: 'drumeo',
            total_xp: '25',
            published_on: '2020-07-25 14:32:01',
            created_on: '2020-07-25 14:32:04',
            archived_on: null,
            parent_id: null,
            child_id: null,
            fields: [
              {
                id: 358690,
                content_id: 263696,
                key: 'show_in_new_feed',
                value: '1',
                type: 'boolean',
                position: 1
              },
              {
                id: 358691,
                content_id: 263696,
                key: 'title',
                value: '#2',
                type: 'string',
                position: 1
              },
              {
                id: 358693,
                content_id: 263696,
                key: 'xp',
                value: '25',
                type: 'integer',
                position: 1
              },
              {
                id: 358910,
                content_id: 263696,
                key: 'soundslice_xml_file_url',
                value:
                  'https://d1923uyy6spedc.cloudfront.net/263696-soundslice-xml-file-1595858544.musicxml',
                type: 'string',
                position: 1
              },
              {
                id: 358911,
                content_id: 263696,
                key: 'soundslice_slug',
                value: '434946',
                type: 'string',
                position: 1
              },
              { key: 'difficulty', value: 'all', type: 'string', position: 1 }
            ],
            data: [
              {
                id: 142680,
                content_id: 263696,
                key: 'timecode',
                value: '150',
                position: 1
              },
              {
                id: 142681,
                content_id: 263696,
                key: 'sheet_music_image_url',
                value:
                  'https://d1923uyy6spedc.cloudfront.net/263696-sheet-image-1595687634.svg',
                position: 1
              }
            ],
            permissions: [],
            user_progress: { 149628: [] },
            completed: false,
            started: false,
            progress_percent: 0,
            user_playlists: { 149628: [] },
            is_added_to_primary_playlist: false,
            published_on_in_timezone: {
              date: '2020-07-25 07:32:01.000000',
              timezone_type: 3,
              timezone: 'America/Los_Angeles'
            },
            is_new: false,
            xp: 25,
            like_count: 0
          }
        ],
        xp: 250,
        url:
          'https://staging.drumeo.com/laravel/public/members/lessons/course-part/263381',
        stbs: [],
        xp_bonus: '200',
        length_in_seconds: '443',
        last_watch_position_in_seconds: 0,
        like_count: 6
      },
      {
        id: 263382,
        slug: 'slum-village-just-like-a-test',
        type: 'course-part',
        sort: 0,
        status: 'published',
        language: 'en-US',
        brand: 'drumeo',
        total_xp: '225',
        published_on: '2020-07-25 15:00:00',
        created_on: '2020-07-21 10:55:17',
        archived_on: null,
        parent_id: 262502,
        child_id: 263382,
        fields: [
          {
            id: 358427,
            content_id: 263382,
            key: 'show_in_new_feed',
            value: '1',
            type: 'boolean',
            position: 1
          },
          {
            id: 358428,
            content_id: 263382,
            key: 'title',
            value: 'Slum Village - "Just Like A Test"',
            type: 'string',
            position: 1
          },
          {
            id: 358556,
            content_id: 263382,
            key: 'xp',
            value: '200',
            type: 'integer',
            position: 1
          },
          {
            id: 358558,
            content_id: 263382,
            key: 'tag',
            value: '2015',
            type: 'string',
            position: 1
          },
          {
            id: 358557,
            content_id: 263382,
            key: 'tag',
            value: 'yes',
            type: 'string',
            position: 2
          },
          {
            id: 358555,
            content_id: 263382,
            key: 'video',
            value: {
              id: 263484,
              slug: 'vimeo-video-440750183',
              type: 'vimeo-video',
              sort: 0,
              status: 'published',
              language: 'en-US',
              brand: 'drumeo',
              total_xp: '150',
              published_on: '2020-07-22 18:30:17',
              created_on: '2020-07-22 18:30:17',
              archived_on: null,
              parent_id: null,
              child_id: null,
              fields: [
                {
                  id: 358499,
                  content_id: 263484,
                  key: 'vimeo_video_id',
                  value: '440750183',
                  type: 'string',
                  position: 1
                },
                {
                  id: 358500,
                  content_id: 263484,
                  key: 'length_in_seconds',
                  value: '241',
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
          { key: 'difficulty', value: 'all', type: 'string', position: 1 }
        ],
        data: [
          {
            id: 142657,
            content_id: 263382,
            key: 'original_thumbnail_url',
            value:
              'https://d1923uyy6spedc.cloudfront.net/263382-card-thumbnail-maxres-1595685729.png',
            position: 1
          },
          {
            id: 142658,
            content_id: 263382,
            key: 'thumbnail_url',
            value:
              'https://d1923uyy6spedc.cloudfront.net/263382-card-thumbnail-1595685733.png',
            position: 1
          },
          {
            id: 142667,
            content_id: 263382,
            key: 'resource_name',
            value: 'PDF Sheet Music',
            position: 1
          },
          {
            id: 142668,
            content_id: 263382,
            key: 'resource_url',
            value:
              'https://s3.amazonaws.com/drumeo/courses/pdf/dca-14-the-soul-hop-grooves-of-daru-jones/dca-14e-just-like-a-test-slum-village.pdf',
            position: 1
          },
          {
            id: 142520,
            content_id: 263382,
            key: 'description',
            value:
              '<p>This is a killer, rare track from the legendary Slum Village group.</p>',
            position: 1
          }
        ],
        permissions: [
          {
            id: 1,
            content_id: null,
            content_type: 'course-part',
            permission_id: 1,
            brand: 'drumeo',
            name: 'Drumeo Edge'
          }
        ],
        child_ids: [263382],
        position: 5,
        user_progress: { 149628: [] },
        completed: false,
        started: false,
        progress_percent: 0,
        user_playlists: { 149628: [] },
        is_added_to_primary_playlist: false,
        published_on_in_timezone: {
          date: '2020-07-25 08:00:00.000000',
          timezone_type: 3,
          timezone: 'America/Los_Angeles'
        },
        is_new: false,
        resources: {
          1: {
            resource_id: 142667,
            resource_name: 'PDF Sheet Music',
            resource_url:
              'https://s3.amazonaws.com/drumeo/courses/pdf/dca-14-the-soul-hop-grooves-of-daru-jones/dca-14e-just-like-a-test-slum-village.pdf'
          }
        },
        assignments: [
          {
            id: 263697,
            slug: 'slum-village-just-like-a-test',
            type: 'assignment',
            sort: 0,
            status: 'published',
            language: 'en-US',
            brand: 'drumeo',
            total_xp: '25',
            published_on: '2020-07-25 14:39:29',
            created_on: '2020-07-25 14:39:32',
            archived_on: null,
            parent_id: null,
            child_id: null,
            fields: [
              {
                id: 358912,
                content_id: 263697,
                key: 'soundslice_xml_file_url',
                value:
                  'https://d1923uyy6spedc.cloudfront.net/263697-soundslice-xml-file-1595859030.musicxml',
                type: 'string',
                position: 1
              },
              {
                id: 358913,
                content_id: 263697,
                key: 'soundslice_slug',
                value: '434950',
                type: 'string',
                position: 1
              },
              {
                id: 358694,
                content_id: 263697,
                key: 'show_in_new_feed',
                value: '1',
                type: 'boolean',
                position: 1
              },
              {
                id: 358695,
                content_id: 263697,
                key: 'title',
                value: 'Slum Village - "Just Like A Test"',
                type: 'string',
                position: 1
              },
              {
                id: 358696,
                content_id: 263697,
                key: 'xp',
                value: '25',
                type: 'integer',
                position: 1
              },
              { key: 'difficulty', value: 'all', type: 'string', position: 1 }
            ],
            data: [
              {
                id: 142682,
                content_id: 263697,
                key: 'sheet_music_image_url',
                value:
                  'https://d1923uyy6spedc.cloudfront.net/263697-sheet-image-1595688001.svg',
                position: 1
              }
            ],
            permissions: [],
            user_progress: { 149628: [] },
            completed: false,
            started: false,
            progress_percent: 0,
            user_playlists: { 149628: [] },
            is_added_to_primary_playlist: false,
            published_on_in_timezone: {
              date: '2020-07-25 07:39:29.000000',
              timezone_type: 3,
              timezone: 'America/Los_Angeles'
            },
            is_new: false,
            xp: 25,
            like_count: 0
          }
        ],
        xp: 225,
        url:
          'https://staging.drumeo.com/laravel/public/members/lessons/course-part/263382',
        stbs: [],
        xp_bonus: '200',
        length_in_seconds: '241',
        last_watch_position_in_seconds: 0,
        like_count: 5
      },
      {
        id: 263383,
        slug: 'jamie-lidell-walk-right-back',
        type: 'course-part',
        sort: 0,
        status: 'published',
        language: 'en-US',
        brand: 'drumeo',
        total_xp: '225',
        published_on: '2020-07-25 15:00:00',
        created_on: '2020-07-21 10:55:52',
        archived_on: null,
        parent_id: 262502,
        child_id: 263383,
        fields: [
          {
            id: 358429,
            content_id: 263383,
            key: 'show_in_new_feed',
            value: '1',
            type: 'boolean',
            position: 1
          },
          {
            id: 358430,
            content_id: 263383,
            key: 'title',
            value: 'Jamie Lidell - "Walk Right Back"',
            type: 'string',
            position: 1
          },
          {
            id: 358546,
            content_id: 263383,
            key: 'xp',
            value: '200',
            type: 'integer',
            position: 1
          },
          {
            id: 358553,
            content_id: 263383,
            key: 'tag',
            value: 'a',
            type: 'string',
            position: 1
          },
          {
            id: 358552,
            content_id: 263383,
            key: 'tag',
            value: 'building',
            type: 'string',
            position: 2
          },
          {
            id: 358554,
            content_id: 263383,
            key: 'tag',
            value: 'beginning',
            type: 'string',
            position: 3
          },
          {
            id: 358545,
            content_id: 263383,
            key: 'video',
            value: {
              id: 263482,
              slug: 'vimeo-video-440750295',
              type: 'vimeo-video',
              sort: 0,
              status: 'published',
              language: 'en-US',
              brand: 'drumeo',
              total_xp: '150',
              published_on: '2020-07-22 18:30:16',
              created_on: '2020-07-22 18:30:16',
              archived_on: null,
              parent_id: null,
              child_id: null,
              fields: [
                {
                  id: 358497,
                  content_id: 263482,
                  key: 'vimeo_video_id',
                  value: '440750295',
                  type: 'string',
                  position: 1
                },
                {
                  id: 358498,
                  content_id: 263482,
                  key: 'length_in_seconds',
                  value: '614',
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
          { key: 'difficulty', value: 'all', type: 'string', position: 1 }
        ],
        data: [
          {
            id: 142659,
            content_id: 263383,
            key: 'original_thumbnail_url',
            value:
              'https://d1923uyy6spedc.cloudfront.net/263383-card-thumbnail-maxres-1595685785.png',
            position: 1
          },
          {
            id: 142660,
            content_id: 263383,
            key: 'thumbnail_url',
            value:
              'https://d1923uyy6spedc.cloudfront.net/263383-card-thumbnail-1595685793.png',
            position: 1
          },
          {
            id: 142669,
            content_id: 263383,
            key: 'resource_name',
            value: 'PDF Sheet Music',
            position: 1
          },
          {
            id: 142670,
            content_id: 263383,
            key: 'resource_url',
            value:
              'https://s3.amazonaws.com/drumeo/courses/pdf/dca-14-the-soul-hop-grooves-of-daru-jones/dca-14f-walk-right-back-jamie-lidell-conclusion.pdf',
            position: 1
          },
          {
            id: 142519,
            content_id: 263383,
            key: 'description',
            value: "<p>The title track off of Jamie Lidell's 2016 album.</p>",
            position: 1
          }
        ],
        permissions: [
          {
            id: 1,
            content_id: null,
            content_type: 'course-part',
            permission_id: 1,
            brand: 'drumeo',
            name: 'Drumeo Edge'
          }
        ],
        child_ids: [263383],
        position: 6,
        user_progress: { 149628: [] },
        completed: false,
        started: false,
        progress_percent: 0,
        user_playlists: { 149628: [] },
        is_added_to_primary_playlist: false,
        published_on_in_timezone: {
          date: '2020-07-25 08:00:00.000000',
          timezone_type: 3,
          timezone: 'America/Los_Angeles'
        },
        is_new: false,
        resources: {
          1: {
            resource_id: 142669,
            resource_name: 'PDF Sheet Music',
            resource_url:
              'https://s3.amazonaws.com/drumeo/courses/pdf/dca-14-the-soul-hop-grooves-of-daru-jones/dca-14f-walk-right-back-jamie-lidell-conclusion.pdf'
          }
        },
        assignments: [
          {
            id: 263698,
            slug: 'jamie-lidell-walk-right-back',
            type: 'assignment',
            sort: 0,
            status: 'published',
            language: 'en-US',
            brand: 'drumeo',
            total_xp: '25',
            published_on: '2020-07-25 14:44:58',
            created_on: '2020-07-25 14:45:01',
            archived_on: null,
            parent_id: null,
            child_id: null,
            fields: [
              {
                id: 358914,
                content_id: 263698,
                key: 'soundslice_xml_file_url',
                value:
                  'https://d1923uyy6spedc.cloudfront.net/263698-soundslice-xml-file-1595859430.musicxml',
                type: 'string',
                position: 1
              },
              {
                id: 358915,
                content_id: 263698,
                key: 'soundslice_slug',
                value: '434952',
                type: 'string',
                position: 1
              },
              {
                id: 358697,
                content_id: 263698,
                key: 'show_in_new_feed',
                value: '1',
                type: 'boolean',
                position: 1
              },
              {
                id: 358698,
                content_id: 263698,
                key: 'title',
                value: 'Jamie Lidell - "Walk Right Back"',
                type: 'string',
                position: 1
              },
              {
                id: 358699,
                content_id: 263698,
                key: 'xp',
                value: '25',
                type: 'integer',
                position: 1
              },
              { key: 'difficulty', value: 'all', type: 'string', position: 1 }
            ],
            data: [
              {
                id: 142683,
                content_id: 263698,
                key: 'sheet_music_image_url',
                value:
                  'https://d1923uyy6spedc.cloudfront.net/263698-sheet-image-1595688346.svg',
                position: 1
              }
            ],
            permissions: [],
            user_progress: { 149628: [] },
            completed: false,
            started: false,
            progress_percent: 0,
            user_playlists: { 149628: [] },
            is_added_to_primary_playlist: false,
            published_on_in_timezone: {
              date: '2020-07-25 07:44:58.000000',
              timezone_type: 3,
              timezone: 'America/Los_Angeles'
            },
            is_new: false,
            xp: 25,
            like_count: 0
          }
        ],
        xp: 225,
        url:
          'https://staging.drumeo.com/laravel/public/members/lessons/course-part/263383',
        stbs: [],
        xp_bonus: '200',
        length_in_seconds: '614',
        last_watch_position_in_seconds: 0,
        like_count: 6
      }
    ],
    current_lesson_index: 0,
    current_lesson: {
      id: 263379,
      slug: 'jack-white-lazaretto',
      type: 'course-part',
      sort: 0,
      status: 'published',
      language: 'en-US',
      brand: 'drumeo',
      total_xp: '225',
      published_on: '2020-07-25 15:00:00',
      created_on: '2020-07-21 10:51:39',
      archived_on: null,
      parent_id: 262502,
      child_id: 263379,
      fields: [
        {
          id: 358421,
          content_id: 263379,
          key: 'show_in_new_feed',
          value: '1',
          type: 'boolean',
          position: 1
        },
        {
          id: 358422,
          content_id: 263379,
          key: 'title',
          value: 'Jack White - "Lazaretto"',
          type: 'string',
          position: 1
        },
        {
          id: 358570,
          content_id: 263379,
          key: 'xp',
          value: '200',
          type: 'integer',
          position: 1
        },
        {
          id: 358572,
          content_id: 263379,
          key: 'tag',
          value: 'lazareto',
          type: 'string',
          position: 1
        },
        {
          id: 358571,
          content_id: 263379,
          key: 'video',
          value: {
            id: 263489,
            slug: 'vimeo-video-440750008',
            type: 'vimeo-video',
            sort: 0,
            status: 'published',
            language: 'en-US',
            brand: 'drumeo',
            total_xp: '150',
            published_on: '2020-07-22 18:30:18',
            created_on: '2020-07-22 18:30:18',
            archived_on: null,
            parent_id: null,
            child_id: null,
            fields: [
              {
                id: 358503,
                content_id: 263489,
                key: 'vimeo_video_id',
                value: '440750008',
                type: 'string',
                position: 1
              },
              {
                id: 358504,
                content_id: 263489,
                key: 'length_in_seconds',
                value: '201',
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
        { key: 'difficulty', value: 'all', type: 'string', position: 1 }
      ],
      data: [
        {
          id: 142651,
          content_id: 263379,
          key: 'original_thumbnail_url',
          value:
            'https://d1923uyy6spedc.cloudfront.net/263379-card-thumbnail-maxres-1595685448.png',
          position: 1
        },
        {
          id: 142652,
          content_id: 263379,
          key: 'thumbnail_url',
          value:
            'https://d1923uyy6spedc.cloudfront.net/263379-card-thumbnail-1595685452.png',
          position: 1
        },
        {
          id: 142661,
          content_id: 263379,
          key: 'resource_name',
          value: 'PDF Sheet Music',
          position: 1
        },
        {
          id: 142662,
          content_id: 263379,
          key: 'resource_url',
          value:
            'https://s3.amazonaws.com/drumeo/courses/pdf/dca-14-the-soul-hop-grooves-of-daru-jones/dca-14b-Lazaretto.pdf',
          position: 1
        },
        {
          id: 142523,
          content_id: 263379,
          key: 'description',
          value:
            "<p>Check out Daru's signature groove from the title track off of Jack White's 2014 Grammy winning album.</p>",
          position: 1
        }
      ],
      permissions: [
        {
          id: 1,
          content_id: null,
          content_type: 'course-part',
          permission_id: 1,
          brand: 'drumeo',
          name: 'Drumeo Edge'
        }
      ],
      child_ids: [263379],
      position: 2,
      user_progress: { 149628: [] },
      completed: false,
      started: false,
      progress_percent: 0,
      user_playlists: { 149628: [] },
      is_added_to_primary_playlist: false,
      published_on_in_timezone: {
        date: '2020-07-25 08:00:00.000000',
        timezone_type: 3,
        timezone: 'America/Los_Angeles'
      },
      is_new: false,
      resources: {
        1: {
          resource_id: 142661,
          resource_name: 'PDF Sheet Music',
          resource_url:
            'https://s3.amazonaws.com/drumeo/courses/pdf/dca-14-the-soul-hop-grooves-of-daru-jones/dca-14b-Lazaretto.pdf'
        }
      },
      assignments: [
        {
          id: 263692,
          slug: 'jack-white-lazaretto',
          type: 'assignment',
          sort: 0,
          status: 'published',
          language: 'en-US',
          brand: 'drumeo',
          total_xp: '25',
          published_on: '2020-07-25 14:23:25',
          created_on: '2020-07-25 14:23:28',
          archived_on: null,
          parent_id: null,
          child_id: null,
          fields: [
            {
              id: 358682,
              content_id: 263692,
              key: 'show_in_new_feed',
              value: '1',
              type: 'boolean',
              position: 1
            },
            {
              id: 358683,
              content_id: 263692,
              key: 'title',
              value: 'Jack White - "Lazaretto"',
              type: 'string',
              position: 1
            },
            {
              id: 358684,
              content_id: 263692,
              key: 'xp',
              value: '25',
              type: 'integer',
              position: 1
            },
            {
              id: 358904,
              content_id: 263692,
              key: 'soundslice_xml_file_url',
              value:
                'https://d1923uyy6spedc.cloudfront.net/263692-soundslice-xml-file-1595857857.musicxml',
              type: 'string',
              position: 1
            },
            {
              id: 358905,
              content_id: 263692,
              key: 'soundslice_slug',
              value: '434924',
              type: 'string',
              position: 1
            },
            { key: 'difficulty', value: 'all', type: 'string', position: 1 }
          ],
          data: [
            {
              id: 142671,
              content_id: 263692,
              key: 'sheet_music_image_url',
              value:
                'https://d1923uyy6spedc.cloudfront.net/263692-sheet-image-1595687036.svg',
              position: 1
            }
          ],
          permissions: [],
          user_progress: { 149628: [] },
          completed: false,
          started: false,
          progress_percent: 0,
          user_playlists: { 149628: [] },
          is_added_to_primary_playlist: false,
          published_on_in_timezone: {
            date: '2020-07-25 07:23:25.000000',
            timezone_type: 3,
            timezone: 'America/Los_Angeles'
          },
          is_new: false,
          xp: 25,
          like_count: 0
        }
      ],
      xp: 225,
      url:
        'https://staging.drumeo.com/laravel/public/members/lessons/course-part/263379',
      stbs: [],
      xp_bonus: '200',
      length_in_seconds: '201',
      last_watch_position_in_seconds: 0,
      like_count: 8
    },
    next_lesson: {
      id: 263379,
      slug: 'jack-white-lazaretto',
      type: 'course-part',
      sort: 0,
      status: 'published',
      language: 'en-US',
      brand: 'drumeo',
      total_xp: '225',
      published_on: '2020-07-25 15:00:00',
      created_on: '2020-07-21 10:51:39',
      archived_on: null,
      parent_id: 262502,
      child_id: 263379,
      fields: [
        {
          id: 358421,
          content_id: 263379,
          key: 'show_in_new_feed',
          value: '1',
          type: 'boolean',
          position: 1
        },
        {
          id: 358422,
          content_id: 263379,
          key: 'title',
          value: 'Jack White - "Lazaretto"',
          type: 'string',
          position: 1
        },
        {
          id: 358570,
          content_id: 263379,
          key: 'xp',
          value: '200',
          type: 'integer',
          position: 1
        },
        {
          id: 358572,
          content_id: 263379,
          key: 'tag',
          value: 'lazareto',
          type: 'string',
          position: 1
        },
        {
          id: 358571,
          content_id: 263379,
          key: 'video',
          value: {
            id: 263489,
            slug: 'vimeo-video-440750008',
            type: 'vimeo-video',
            sort: 0,
            status: 'published',
            language: 'en-US',
            brand: 'drumeo',
            total_xp: '150',
            published_on: '2020-07-22 18:30:18',
            created_on: '2020-07-22 18:30:18',
            archived_on: null,
            parent_id: null,
            child_id: null,
            fields: [
              {
                id: 358503,
                content_id: 263489,
                key: 'vimeo_video_id',
                value: '440750008',
                type: 'string',
                position: 1
              },
              {
                id: 358504,
                content_id: 263489,
                key: 'length_in_seconds',
                value: '201',
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
        { key: 'difficulty', value: 'all', type: 'string', position: 1 }
      ],
      data: [
        {
          id: 142651,
          content_id: 263379,
          key: 'original_thumbnail_url',
          value:
            'https://d1923uyy6spedc.cloudfront.net/263379-card-thumbnail-maxres-1595685448.png',
          position: 1
        },
        {
          id: 142652,
          content_id: 263379,
          key: 'thumbnail_url',
          value:
            'https://d1923uyy6spedc.cloudfront.net/263379-card-thumbnail-1595685452.png',
          position: 1
        },
        {
          id: 142661,
          content_id: 263379,
          key: 'resource_name',
          value: 'PDF Sheet Music',
          position: 1
        },
        {
          id: 142662,
          content_id: 263379,
          key: 'resource_url',
          value:
            'https://s3.amazonaws.com/drumeo/courses/pdf/dca-14-the-soul-hop-grooves-of-daru-jones/dca-14b-Lazaretto.pdf',
          position: 1
        },
        {
          id: 142523,
          content_id: 263379,
          key: 'description',
          value:
            "<p>Check out Daru's signature groove from the title track off of Jack White's 2014 Grammy winning album.</p>",
          position: 1
        }
      ],
      permissions: [
        {
          id: 1,
          content_id: null,
          content_type: 'course-part',
          permission_id: 1,
          brand: 'drumeo',
          name: 'Drumeo Edge'
        }
      ],
      child_ids: [263379],
      position: 2,
      user_progress: { 149628: [] },
      completed: false,
      started: false,
      progress_percent: 0,
      user_playlists: { 149628: [] },
      is_added_to_primary_playlist: false,
      published_on_in_timezone: {
        date: '2020-07-25 08:00:00.000000',
        timezone_type: 3,
        timezone: 'America/Los_Angeles'
      },
      is_new: false,
      resources: {
        1: {
          resource_id: 142661,
          resource_name: 'PDF Sheet Music',
          resource_url:
            'https://s3.amazonaws.com/drumeo/courses/pdf/dca-14-the-soul-hop-grooves-of-daru-jones/dca-14b-Lazaretto.pdf'
        }
      },
      assignments: [
        {
          id: 263692,
          slug: 'jack-white-lazaretto',
          type: 'assignment',
          sort: 0,
          status: 'published',
          language: 'en-US',
          brand: 'drumeo',
          total_xp: '25',
          published_on: '2020-07-25 14:23:25',
          created_on: '2020-07-25 14:23:28',
          archived_on: null,
          parent_id: null,
          child_id: null,
          fields: [
            {
              id: 358682,
              content_id: 263692,
              key: 'show_in_new_feed',
              value: '1',
              type: 'boolean',
              position: 1
            },
            {
              id: 358683,
              content_id: 263692,
              key: 'title',
              value: 'Jack White - "Lazaretto"',
              type: 'string',
              position: 1
            },
            {
              id: 358684,
              content_id: 263692,
              key: 'xp',
              value: '25',
              type: 'integer',
              position: 1
            },
            {
              id: 358904,
              content_id: 263692,
              key: 'soundslice_xml_file_url',
              value:
                'https://d1923uyy6spedc.cloudfront.net/263692-soundslice-xml-file-1595857857.musicxml',
              type: 'string',
              position: 1
            },
            {
              id: 358905,
              content_id: 263692,
              key: 'soundslice_slug',
              value: '434924',
              type: 'string',
              position: 1
            },
            { key: 'difficulty', value: 'all', type: 'string', position: 1 }
          ],
          data: [
            {
              id: 142671,
              content_id: 263692,
              key: 'sheet_music_image_url',
              value:
                'https://d1923uyy6spedc.cloudfront.net/263692-sheet-image-1595687036.svg',
              position: 1
            }
          ],
          permissions: [],
          user_progress: { 149628: [] },
          completed: false,
          started: false,
          progress_percent: 0,
          user_playlists: { 149628: [] },
          is_added_to_primary_playlist: false,
          published_on_in_timezone: {
            date: '2020-07-25 07:23:25.000000',
            timezone_type: 3,
            timezone: 'America/Los_Angeles'
          },
          is_new: false,
          xp: 25,
          like_count: 0
        }
      ],
      xp: 225,
      url:
        'https://staging.drumeo.com/laravel/public/members/lessons/course-part/263379',
      stbs: [],
      xp_bonus: '200',
      length_in_seconds: '201',
      last_watch_position_in_seconds: 0,
      like_count: 8
    },
    like_count: 0
  },
  next_lesson: {
    id: 263379,
    slug: 'jack-white-lazaretto',
    type: 'course-part',
    sort: 0,
    status: 'published',
    language: 'en-US',
    brand: 'drumeo',
    total_xp: '225',
    published_on: '2020-07-25 15:00:00',
    created_on: '2020-07-21 10:51:39',
    archived_on: null,
    parent_id: 262502,
    child_id: 263379,
    fields: [
      {
        id: 358421,
        content_id: 263379,
        key: 'show_in_new_feed',
        value: '1',
        type: 'boolean',
        position: 1
      },
      {
        id: 358422,
        content_id: 263379,
        key: 'title',
        value: 'Jack White - "Lazaretto"',
        type: 'string',
        position: 1
      },
      {
        id: 358570,
        content_id: 263379,
        key: 'xp',
        value: '200',
        type: 'integer',
        position: 1
      },
      {
        id: 358572,
        content_id: 263379,
        key: 'tag',
        value: 'lazareto',
        type: 'string',
        position: 1
      },
      {
        id: 358571,
        content_id: 263379,
        key: 'video',
        value: {
          id: 263489,
          slug: 'vimeo-video-440750008',
          type: 'vimeo-video',
          sort: 0,
          status: 'published',
          language: 'en-US',
          brand: 'drumeo',
          total_xp: '150',
          published_on: '2020-07-22 18:30:18',
          created_on: '2020-07-22 18:30:18',
          archived_on: null,
          parent_id: null,
          child_id: null,
          fields: [
            {
              id: 358503,
              content_id: 263489,
              key: 'vimeo_video_id',
              value: '440750008',
              type: 'string',
              position: 1
            },
            {
              id: 358504,
              content_id: 263489,
              key: 'length_in_seconds',
              value: '201',
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
      { key: 'difficulty', value: 'all', type: 'string', position: 1 }
    ],
    data: [
      {
        id: 142651,
        content_id: 263379,
        key: 'original_thumbnail_url',
        value:
          'https://d1923uyy6spedc.cloudfront.net/263379-card-thumbnail-maxres-1595685448.png',
        position: 1
      },
      {
        id: 142652,
        content_id: 263379,
        key: 'thumbnail_url',
        value:
          'https://d1923uyy6spedc.cloudfront.net/263379-card-thumbnail-1595685452.png',
        position: 1
      },
      {
        id: 142661,
        content_id: 263379,
        key: 'resource_name',
        value: 'PDF Sheet Music',
        position: 1
      },
      {
        id: 142662,
        content_id: 263379,
        key: 'resource_url',
        value:
          'https://s3.amazonaws.com/drumeo/courses/pdf/dca-14-the-soul-hop-grooves-of-daru-jones/dca-14b-Lazaretto.pdf',
        position: 1
      },
      {
        id: 142523,
        content_id: 263379,
        key: 'description',
        value:
          "<p>Check out Daru's signature groove from the title track off of Jack White's 2014 Grammy winning album.</p>",
        position: 1
      }
    ],
    permissions: [
      {
        id: 1,
        content_id: null,
        content_type: 'course-part',
        permission_id: 1,
        brand: 'drumeo',
        name: 'Drumeo Edge'
      }
    ],
    child_ids: [263379],
    position: 2,
    user_progress: { 149628: [] },
    completed: false,
    started: false,
    progress_percent: 0,
    user_playlists: { 149628: [] },
    is_added_to_primary_playlist: false,
    published_on_in_timezone: {
      date: '2020-07-25 08:00:00.000000',
      timezone_type: 3,
      timezone: 'America/Los_Angeles'
    },
    is_new: false,
    resources: {
      1: {
        resource_id: 142661,
        resource_name: 'PDF Sheet Music',
        resource_url:
          'https://s3.amazonaws.com/drumeo/courses/pdf/dca-14-the-soul-hop-grooves-of-daru-jones/dca-14b-Lazaretto.pdf'
      }
    },
    assignments: [
      {
        id: 263692,
        slug: 'jack-white-lazaretto',
        type: 'assignment',
        sort: 0,
        status: 'published',
        language: 'en-US',
        brand: 'drumeo',
        total_xp: '25',
        published_on: '2020-07-25 14:23:25',
        created_on: '2020-07-25 14:23:28',
        archived_on: null,
        parent_id: null,
        child_id: null,
        fields: [
          {
            id: 358682,
            content_id: 263692,
            key: 'show_in_new_feed',
            value: '1',
            type: 'boolean',
            position: 1
          },
          {
            id: 358683,
            content_id: 263692,
            key: 'title',
            value: 'Jack White - "Lazaretto"',
            type: 'string',
            position: 1
          },
          {
            id: 358684,
            content_id: 263692,
            key: 'xp',
            value: '25',
            type: 'integer',
            position: 1
          },
          {
            id: 358904,
            content_id: 263692,
            key: 'soundslice_xml_file_url',
            value:
              'https://d1923uyy6spedc.cloudfront.net/263692-soundslice-xml-file-1595857857.musicxml',
            type: 'string',
            position: 1
          },
          {
            id: 358905,
            content_id: 263692,
            key: 'soundslice_slug',
            value: '434924',
            type: 'string',
            position: 1
          },
          { key: 'difficulty', value: 'all', type: 'string', position: 1 }
        ],
        data: [
          {
            id: 142671,
            content_id: 263692,
            key: 'sheet_music_image_url',
            value:
              'https://d1923uyy6spedc.cloudfront.net/263692-sheet-image-1595687036.svg',
            position: 1
          }
        ],
        permissions: [],
        user_progress: { 149628: [] },
        completed: false,
        started: false,
        progress_percent: 0,
        user_playlists: { 149628: [] },
        is_added_to_primary_playlist: false,
        published_on_in_timezone: {
          date: '2020-07-25 07:23:25.000000',
          timezone_type: 3,
          timezone: 'America/Los_Angeles'
        },
        is_new: false,
        xp: 25,
        like_count: 0
      }
    ],
    xp: 225,
    url:
      'https://staging.drumeo.com/laravel/public/members/lessons/course-part/263379',
    stbs: [],
    xp_bonus: '200',
    length_in_seconds: '201',
    last_watch_position_in_seconds: 0,
    like_count: 8
  },
  previous_lesson: null,
  related_lessons: [
    {
      id: 263378,
      slug: 'introduction',
      type: 'course-part',
      sort: 0,
      status: 'published',
      language: 'en-US',
      brand: 'drumeo',
      total_xp: '200',
      published_on: '2020-07-25 15:00:00',
      created_on: '2020-07-21 10:50:54',
      archived_on: null,
      parent_id: 262502,
      child_id: 263378,
      fields: [
        {
          id: 358419,
          content_id: 263378,
          key: 'show_in_new_feed',
          value: '1',
          type: 'boolean',
          position: 1
        },
        {
          id: 358420,
          content_id: 263378,
          key: 'title',
          value: 'Introduction',
          type: 'string',
          position: 1
        },
        {
          id: 358574,
          content_id: 263378,
          key: 'xp',
          value: '200',
          type: 'integer',
          position: 1
        },
        {
          id: 358575,
          content_id: 263378,
          key: 'tag',
          value: 'intro',
          type: 'string',
          position: 1
        },
        {
          id: 358573,
          content_id: 263378,
          key: 'video',
          value: {
            id: 263490,
            slug: 'vimeo-video-440749961',
            type: 'vimeo-video',
            sort: 0,
            status: 'published',
            language: 'en-US',
            brand: 'drumeo',
            total_xp: '150',
            published_on: '2020-07-22 18:30:19',
            created_on: '2020-07-22 18:30:19',
            archived_on: null,
            parent_id: null,
            child_id: null,
            fields: [
              {
                id: 358505,
                content_id: 263490,
                key: 'vimeo_video_id',
                value: '440749961',
                type: 'string',
                position: 1
              },
              {
                id: 358506,
                content_id: 263490,
                key: 'length_in_seconds',
                value: '109',
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
        { key: 'difficulty', value: 'all', type: 'string', position: 1 }
      ],
      data: [
        {
          id: 142648,
          content_id: 263378,
          key: 'original_thumbnail_url',
          value:
            'https://d1923uyy6spedc.cloudfront.net/263378-card-thumbnail-maxres-1595685270.png',
          position: 1
        },
        {
          id: 142649,
          content_id: 263378,
          key: 'thumbnail_url',
          value:
            'https://d1923uyy6spedc.cloudfront.net/263378-card-thumbnail-1595685275.png',
          position: 1
        },
        {
          id: 142650,
          content_id: 263378,
          key: 'description',
          value:
            '<p>Daru explains his approach to playing drums, and how his style is identifiably unique. Soul Hop is his way of combining two of his biggest influences: soul music and hip-hop.</p>',
          position: 1
        }
      ],
      permissions: [
        {
          id: 1,
          content_id: null,
          content_type: 'course-part',
          permission_id: 1,
          brand: 'drumeo',
          name: 'Drumeo Edge'
        }
      ],
      child_ids: [263378],
      position: 1,
      user_progress: {
        149628: {
          id: 9285216,
          content_id: 263378,
          user_id: 149628,
          state: 'started',
          progress_percent: 0,
          higher_key_progress: null,
          updated_on: '2020-08-03 11:03:19'
        }
      },
      completed: false,
      started: true,
      progress_percent: 0,
      user_playlists: { 149628: [] },
      is_added_to_primary_playlist: false,
      published_on_in_timezone: {
        date: '2020-07-25 08:00:00.000000',
        timezone_type: 3,
        timezone: 'America/Los_Angeles'
      },
      is_new: false,
      assignments: [],
      url:
        'https://staging.drumeo.com/laravel/public/members/lessons/course-part/263378',
      stbs: [],
      xp: 200,
      xp_bonus: '200',
      length_in_seconds: '109',
      last_watch_position_in_seconds: 0,
      like_count: 8
    },
    {
      id: 263379,
      slug: 'jack-white-lazaretto',
      type: 'course-part',
      sort: 0,
      status: 'published',
      language: 'en-US',
      brand: 'drumeo',
      total_xp: '225',
      published_on: '2020-07-25 15:00:00',
      created_on: '2020-07-21 10:51:39',
      archived_on: null,
      parent_id: 262502,
      child_id: 263379,
      fields: [
        {
          id: 358421,
          content_id: 263379,
          key: 'show_in_new_feed',
          value: '1',
          type: 'boolean',
          position: 1
        },
        {
          id: 358422,
          content_id: 263379,
          key: 'title',
          value: 'Jack White - "Lazaretto"',
          type: 'string',
          position: 1
        },
        {
          id: 358570,
          content_id: 263379,
          key: 'xp',
          value: '200',
          type: 'integer',
          position: 1
        },
        {
          id: 358572,
          content_id: 263379,
          key: 'tag',
          value: 'lazareto',
          type: 'string',
          position: 1
        },
        {
          id: 358571,
          content_id: 263379,
          key: 'video',
          value: {
            id: 263489,
            slug: 'vimeo-video-440750008',
            type: 'vimeo-video',
            sort: 0,
            status: 'published',
            language: 'en-US',
            brand: 'drumeo',
            total_xp: '150',
            published_on: '2020-07-22 18:30:18',
            created_on: '2020-07-22 18:30:18',
            archived_on: null,
            parent_id: null,
            child_id: null,
            fields: [
              {
                id: 358503,
                content_id: 263489,
                key: 'vimeo_video_id',
                value: '440750008',
                type: 'string',
                position: 1
              },
              {
                id: 358504,
                content_id: 263489,
                key: 'length_in_seconds',
                value: '201',
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
        { key: 'difficulty', value: 'all', type: 'string', position: 1 }
      ],
      data: [
        {
          id: 142651,
          content_id: 263379,
          key: 'original_thumbnail_url',
          value:
            'https://d1923uyy6spedc.cloudfront.net/263379-card-thumbnail-maxres-1595685448.png',
          position: 1
        },
        {
          id: 142652,
          content_id: 263379,
          key: 'thumbnail_url',
          value:
            'https://d1923uyy6spedc.cloudfront.net/263379-card-thumbnail-1595685452.png',
          position: 1
        },
        {
          id: 142661,
          content_id: 263379,
          key: 'resource_name',
          value: 'PDF Sheet Music',
          position: 1
        },
        {
          id: 142662,
          content_id: 263379,
          key: 'resource_url',
          value:
            'https://s3.amazonaws.com/drumeo/courses/pdf/dca-14-the-soul-hop-grooves-of-daru-jones/dca-14b-Lazaretto.pdf',
          position: 1
        },
        {
          id: 142523,
          content_id: 263379,
          key: 'description',
          value:
            "<p>Check out Daru's signature groove from the title track off of Jack White's 2014 Grammy winning album.</p>",
          position: 1
        }
      ],
      permissions: [
        {
          id: 1,
          content_id: null,
          content_type: 'course-part',
          permission_id: 1,
          brand: 'drumeo',
          name: 'Drumeo Edge'
        }
      ],
      child_ids: [263379],
      position: 2,
      user_progress: { 149628: [] },
      completed: false,
      started: false,
      progress_percent: 0,
      user_playlists: { 149628: [] },
      is_added_to_primary_playlist: false,
      published_on_in_timezone: {
        date: '2020-07-25 08:00:00.000000',
        timezone_type: 3,
        timezone: 'America/Los_Angeles'
      },
      is_new: false,
      resources: {
        1: {
          resource_id: 142661,
          resource_name: 'PDF Sheet Music',
          resource_url:
            'https://s3.amazonaws.com/drumeo/courses/pdf/dca-14-the-soul-hop-grooves-of-daru-jones/dca-14b-Lazaretto.pdf'
        }
      },
      assignments: [
        {
          id: 263692,
          slug: 'jack-white-lazaretto',
          type: 'assignment',
          sort: 0,
          status: 'published',
          language: 'en-US',
          brand: 'drumeo',
          total_xp: '25',
          published_on: '2020-07-25 14:23:25',
          created_on: '2020-07-25 14:23:28',
          archived_on: null,
          parent_id: null,
          child_id: null,
          fields: [
            {
              id: 358682,
              content_id: 263692,
              key: 'show_in_new_feed',
              value: '1',
              type: 'boolean',
              position: 1
            },
            {
              id: 358683,
              content_id: 263692,
              key: 'title',
              value: 'Jack White - "Lazaretto"',
              type: 'string',
              position: 1
            },
            {
              id: 358684,
              content_id: 263692,
              key: 'xp',
              value: '25',
              type: 'integer',
              position: 1
            },
            {
              id: 358904,
              content_id: 263692,
              key: 'soundslice_xml_file_url',
              value:
                'https://d1923uyy6spedc.cloudfront.net/263692-soundslice-xml-file-1595857857.musicxml',
              type: 'string',
              position: 1
            },
            {
              id: 358905,
              content_id: 263692,
              key: 'soundslice_slug',
              value: '434924',
              type: 'string',
              position: 1
            },
            { key: 'difficulty', value: 'all', type: 'string', position: 1 }
          ],
          data: [
            {
              id: 142671,
              content_id: 263692,
              key: 'sheet_music_image_url',
              value:
                'https://d1923uyy6spedc.cloudfront.net/263692-sheet-image-1595687036.svg',
              position: 1
            }
          ],
          permissions: [],
          user_progress: { 149628: [] },
          completed: false,
          started: false,
          progress_percent: 0,
          user_playlists: { 149628: [] },
          is_added_to_primary_playlist: false,
          published_on_in_timezone: {
            date: '2020-07-25 07:23:25.000000',
            timezone_type: 3,
            timezone: 'America/Los_Angeles'
          },
          is_new: false,
          xp: 25,
          like_count: 0
        }
      ],
      xp: 225,
      url:
        'https://staging.drumeo.com/laravel/public/members/lessons/course-part/263379',
      stbs: [],
      xp_bonus: '200',
      length_in_seconds: '201',
      last_watch_position_in_seconds: 0,
      like_count: 8
    },
    {
      id: 263380,
      slug: 'ruff-pack-with-you',
      type: 'course-part',
      sort: 0,
      status: 'published',
      language: 'en-US',
      brand: 'drumeo',
      total_xp: '225',
      published_on: '2020-07-25 15:00:00',
      created_on: '2020-07-21 10:52:27',
      archived_on: null,
      parent_id: 262502,
      child_id: 263380,
      fields: [
        {
          id: 358423,
          content_id: 263380,
          key: 'show_in_new_feed',
          value: '1',
          type: 'boolean',
          position: 1
        },
        {
          id: 358424,
          content_id: 263380,
          key: 'title',
          value: 'The Ruff Pack - "With You"',
          type: 'string',
          position: 1
        },
        {
          id: 358564,
          content_id: 263380,
          key: 'xp',
          value: '200',
          type: 'integer',
          position: 1
        },
        {
          id: 358565,
          content_id: 263380,
          key: 'tag',
          value: '2012',
          type: 'string',
          position: 1
        },
        {
          id: 358566,
          content_id: 263380,
          key: 'tag',
          value: 'ruf',
          type: 'string',
          position: 2
        },
        {
          id: 358567,
          content_id: 263380,
          key: 'tag',
          value: 'pac',
          type: 'string',
          position: 3
        },
        {
          id: 358563,
          content_id: 263380,
          key: 'video',
          value: {
            id: 263486,
            slug: 'vimeo-video-440750107',
            type: 'vimeo-video',
            sort: 0,
            status: 'published',
            language: 'en-US',
            brand: 'drumeo',
            total_xp: '150',
            published_on: '2020-07-22 18:30:18',
            created_on: '2020-07-22 18:30:18',
            archived_on: null,
            parent_id: null,
            child_id: null,
            fields: [
              {
                id: 358501,
                content_id: 263486,
                key: 'vimeo_video_id',
                value: '440750107',
                type: 'string',
                position: 1
              },
              {
                id: 358502,
                content_id: 263486,
                key: 'length_in_seconds',
                value: '179',
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
        { key: 'difficulty', value: 'all', type: 'string', position: 1 }
      ],
      data: [
        {
          id: 142653,
          content_id: 263380,
          key: 'original_thumbnail_url',
          value:
            'https://d1923uyy6spedc.cloudfront.net/263380-card-thumbnail-maxres-1595685567.png',
          position: 1
        },
        {
          id: 142654,
          content_id: 263380,
          key: 'thumbnail_url',
          value:
            'https://d1923uyy6spedc.cloudfront.net/263380-card-thumbnail-1595685571.png',
          position: 1
        },
        {
          id: 142663,
          content_id: 263380,
          key: 'resource_name',
          value: 'PDF Sheet Music',
          position: 1
        },
        {
          id: 142664,
          content_id: 263380,
          key: 'resource_url',
          value:
            'https://d1923uyy6spedc.cloudfront.net/263380-resource-1595686317.pdf',
          position: 1
        },
        {
          id: 142522,
          content_id: 263380,
          key: 'description',
          value:
            '<p>Ruff Pack is a New York City based group that blends hip hop and jazz influences.</p>',
          position: 1
        }
      ],
      permissions: [
        {
          id: 1,
          content_id: null,
          content_type: 'course-part',
          permission_id: 1,
          brand: 'drumeo',
          name: 'Drumeo Edge'
        }
      ],
      child_ids: [263380],
      position: 3,
      user_progress: { 149628: [] },
      completed: false,
      started: false,
      progress_percent: 0,
      user_playlists: { 149628: [] },
      is_added_to_primary_playlist: false,
      published_on_in_timezone: {
        date: '2020-07-25 08:00:00.000000',
        timezone_type: 3,
        timezone: 'America/Los_Angeles'
      },
      is_new: false,
      resources: {
        1: {
          resource_id: 142663,
          resource_name: 'PDF Sheet Music',
          resource_url:
            'https://d1923uyy6spedc.cloudfront.net/263380-resource-1595686317.pdf'
        }
      },
      assignments: [
        {
          id: 263693,
          slug: 'the-ruff-pack-with-you',
          type: 'assignment',
          sort: 0,
          status: 'published',
          language: 'en-US',
          brand: 'drumeo',
          total_xp: '25',
          published_on: '2020-07-25 14:25:12',
          created_on: '2020-07-25 14:25:14',
          archived_on: null,
          parent_id: null,
          child_id: null,
          fields: [
            {
              id: 358685,
              content_id: 263693,
              key: 'show_in_new_feed',
              value: '1',
              type: 'boolean',
              position: 1
            },
            {
              id: 358686,
              content_id: 263693,
              key: 'title',
              value: 'The Ruff Pack - "With You"',
              type: 'string',
              position: 1
            },
            {
              id: 358687,
              content_id: 263693,
              key: 'xp',
              value: '25',
              type: 'integer',
              position: 1
            },
            {
              id: 358906,
              content_id: 263693,
              key: 'soundslice_xml_file_url',
              value:
                'https://d1923uyy6spedc.cloudfront.net/263693-soundslice-xml-file-1595858201.musicxml',
              type: 'string',
              position: 1
            },
            {
              id: 358907,
              content_id: 263693,
              key: 'soundslice_slug',
              value: '434942',
              type: 'string',
              position: 1
            },
            { key: 'difficulty', value: 'all', type: 'string', position: 1 }
          ],
          data: [
            {
              id: 142672,
              content_id: 263693,
              key: 'sheet_music_image_url',
              value:
                'https://d1923uyy6spedc.cloudfront.net/263693-sheet-image-1595687178.svg',
              position: 1
            }
          ],
          permissions: [],
          user_progress: { 149628: [] },
          completed: false,
          started: false,
          progress_percent: 0,
          user_playlists: { 149628: [] },
          is_added_to_primary_playlist: false,
          published_on_in_timezone: {
            date: '2020-07-25 07:25:12.000000',
            timezone_type: 3,
            timezone: 'America/Los_Angeles'
          },
          is_new: false,
          xp: 25,
          like_count: 0
        }
      ],
      xp: 225,
      url:
        'https://staging.drumeo.com/laravel/public/members/lessons/course-part/263380',
      stbs: [],
      xp_bonus: '200',
      length_in_seconds: '179',
      last_watch_position_in_seconds: 0,
      like_count: 4
    },
    {
      id: 263381,
      slug: 'black-milk-keep-goin',
      type: 'course-part',
      sort: 0,
      status: 'published',
      language: 'en-US',
      brand: 'drumeo',
      total_xp: '250',
      published_on: '2020-07-25 15:00:00',
      created_on: '2020-07-21 10:53:33',
      archived_on: null,
      parent_id: 262502,
      child_id: 263381,
      fields: [
        {
          id: 358425,
          content_id: 263381,
          key: 'show_in_new_feed',
          value: '1',
          type: 'boolean',
          position: 1
        },
        {
          id: 358426,
          content_id: 263381,
          key: 'title',
          value: 'Black Milk - "Keep Going"',
          type: 'string',
          position: 1
        },
        {
          id: 358559,
          content_id: 263381,
          key: 'xp',
          value: '200',
          type: 'integer',
          position: 1
        },
        {
          id: 358561,
          content_id: 263381,
          key: 'tag',
          value: 'goin',
          type: 'string',
          position: 1
        },
        {
          id: 358562,
          content_id: 263381,
          key: 'tag',
          value: "goin'",
          type: 'string',
          position: 2
        },
        {
          id: 358560,
          content_id: 263381,
          key: 'video',
          value: {
            id: 263497,
            slug: 'vimeo-video-440754098',
            type: 'vimeo-video',
            sort: 0,
            status: 'published',
            language: 'en-US',
            brand: 'drumeo',
            total_xp: '150',
            published_on: '2020-07-22 19:00:54',
            created_on: '2020-07-22 19:00:54',
            archived_on: null,
            parent_id: null,
            child_id: null,
            fields: [
              {
                id: 358515,
                content_id: 263497,
                key: 'vimeo_video_id',
                value: '440754098',
                type: 'string',
                position: 1
              },
              {
                id: 358516,
                content_id: 263497,
                key: 'length_in_seconds',
                value: '443',
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
        { key: 'difficulty', value: 'all', type: 'string', position: 1 }
      ],
      data: [
        {
          id: 142655,
          content_id: 263381,
          key: 'original_thumbnail_url',
          value:
            'https://d1923uyy6spedc.cloudfront.net/263381-card-thumbnail-maxres-1595685671.png',
          position: 1
        },
        {
          id: 142656,
          content_id: 263381,
          key: 'thumbnail_url',
          value:
            'https://d1923uyy6spedc.cloudfront.net/263381-card-thumbnail-1595685676.png',
          position: 1
        },
        {
          id: 142665,
          content_id: 263381,
          key: 'resource_name',
          value: 'PDF Sheet Music',
          position: 1
        },
        {
          id: 142666,
          content_id: 263381,
          key: 'resource_url',
          value:
            'https://s3.amazonaws.com/drumeo/courses/pdf/dca-14-the-soul-hop-grooves-of-daru-jones/dca-14d-Keep-Goin-Black-Milk.pdf',
          position: 1
        },
        {
          id: 142673,
          content_id: 263381,
          key: 'chapter_timecode',
          value: '119',
          position: 1
        },
        {
          id: 142674,
          content_id: 263381,
          key: 'chapter_description',
          value: 'Pattern #1',
          position: 1
        },
        {
          id: 142521,
          content_id: 263381,
          key: 'description',
          value:
            "<p>This track is featured on Black Milk's 2010 release: <em>Album of the Year.</em></p>",
          position: 1
        },
        {
          id: 142675,
          content_id: 263381,
          key: 'chapter_timecode',
          value: '150',
          position: 2
        },
        {
          id: 142676,
          content_id: 263381,
          key: 'chapter_description',
          value: 'Pattern #2',
          position: 2
        }
      ],
      permissions: [
        {
          id: 1,
          content_id: null,
          content_type: 'course-part',
          permission_id: 1,
          brand: 'drumeo',
          name: 'Drumeo Edge'
        }
      ],
      child_ids: [263381],
      position: 4,
      user_progress: { 149628: [] },
      completed: false,
      started: false,
      progress_percent: 0,
      user_playlists: { 149628: [] },
      is_added_to_primary_playlist: false,
      published_on_in_timezone: {
        date: '2020-07-25 08:00:00.000000',
        timezone_type: 3,
        timezone: 'America/Los_Angeles'
      },
      is_new: false,
      resources: {
        1: {
          resource_id: 142665,
          resource_name: 'PDF Sheet Music',
          resource_url:
            'https://s3.amazonaws.com/drumeo/courses/pdf/dca-14-the-soul-hop-grooves-of-daru-jones/dca-14d-Keep-Goin-Black-Milk.pdf'
        }
      },
      chapters: [
        { chapter_timecode: '119', chapter_description: 'Pattern #1' },
        { chapter_timecode: '150', chapter_description: 'Pattern #2' }
      ],
      assignments: [
        {
          id: 263695,
          slug: '1',
          type: 'assignment',
          sort: 0,
          status: 'published',
          language: 'en-US',
          brand: 'drumeo',
          total_xp: '25',
          published_on: '2020-07-25 14:31:36',
          created_on: '2020-07-25 14:31:39',
          archived_on: null,
          parent_id: null,
          child_id: null,
          fields: [
            {
              id: 358688,
              content_id: 263695,
              key: 'show_in_new_feed',
              value: '1',
              type: 'boolean',
              position: 1
            },
            {
              id: 358689,
              content_id: 263695,
              key: 'title',
              value: '#1',
              type: 'string',
              position: 1
            },
            {
              id: 358692,
              content_id: 263695,
              key: 'xp',
              value: '25',
              type: 'integer',
              position: 1
            },
            {
              id: 358908,
              content_id: 263695,
              key: 'soundslice_xml_file_url',
              value:
                'https://d1923uyy6spedc.cloudfront.net/263695-soundslice-xml-file-1595858393.musicxml',
              type: 'string',
              position: 1
            },
            {
              id: 358909,
              content_id: 263695,
              key: 'soundslice_slug',
              value: '434944',
              type: 'string',
              position: 1
            },
            { key: 'difficulty', value: 'all', type: 'string', position: 1 }
          ],
          data: [
            {
              id: 142677,
              content_id: 263695,
              key: 'timecode',
              value: '119',
              position: 1
            },
            {
              id: 142678,
              content_id: 263695,
              key: 'sheet_music_image_url',
              value:
                'https://d1923uyy6spedc.cloudfront.net/263695-sheet-image-1595687556.svg',
              position: 1
            }
          ],
          permissions: [],
          user_progress: { 149628: [] },
          completed: false,
          started: false,
          progress_percent: 0,
          user_playlists: { 149628: [] },
          is_added_to_primary_playlist: false,
          published_on_in_timezone: {
            date: '2020-07-25 07:31:36.000000',
            timezone_type: 3,
            timezone: 'America/Los_Angeles'
          },
          is_new: false,
          xp: 25,
          like_count: 0
        },
        {
          id: 263696,
          slug: '2',
          type: 'assignment',
          sort: 0,
          status: 'published',
          language: 'en-US',
          brand: 'drumeo',
          total_xp: '25',
          published_on: '2020-07-25 14:32:01',
          created_on: '2020-07-25 14:32:04',
          archived_on: null,
          parent_id: null,
          child_id: null,
          fields: [
            {
              id: 358690,
              content_id: 263696,
              key: 'show_in_new_feed',
              value: '1',
              type: 'boolean',
              position: 1
            },
            {
              id: 358691,
              content_id: 263696,
              key: 'title',
              value: '#2',
              type: 'string',
              position: 1
            },
            {
              id: 358693,
              content_id: 263696,
              key: 'xp',
              value: '25',
              type: 'integer',
              position: 1
            },
            {
              id: 358910,
              content_id: 263696,
              key: 'soundslice_xml_file_url',
              value:
                'https://d1923uyy6spedc.cloudfront.net/263696-soundslice-xml-file-1595858544.musicxml',
              type: 'string',
              position: 1
            },
            {
              id: 358911,
              content_id: 263696,
              key: 'soundslice_slug',
              value: '434946',
              type: 'string',
              position: 1
            },
            { key: 'difficulty', value: 'all', type: 'string', position: 1 }
          ],
          data: [
            {
              id: 142680,
              content_id: 263696,
              key: 'timecode',
              value: '150',
              position: 1
            },
            {
              id: 142681,
              content_id: 263696,
              key: 'sheet_music_image_url',
              value:
                'https://d1923uyy6spedc.cloudfront.net/263696-sheet-image-1595687634.svg',
              position: 1
            }
          ],
          permissions: [],
          user_progress: { 149628: [] },
          completed: false,
          started: false,
          progress_percent: 0,
          user_playlists: { 149628: [] },
          is_added_to_primary_playlist: false,
          published_on_in_timezone: {
            date: '2020-07-25 07:32:01.000000',
            timezone_type: 3,
            timezone: 'America/Los_Angeles'
          },
          is_new: false,
          xp: 25,
          like_count: 0
        }
      ],
      xp: 250,
      url:
        'https://staging.drumeo.com/laravel/public/members/lessons/course-part/263381',
      stbs: [],
      xp_bonus: '200',
      length_in_seconds: '443',
      last_watch_position_in_seconds: 0,
      like_count: 6
    },
    {
      id: 263382,
      slug: 'slum-village-just-like-a-test',
      type: 'course-part',
      sort: 0,
      status: 'published',
      language: 'en-US',
      brand: 'drumeo',
      total_xp: '225',
      published_on: '2020-07-25 15:00:00',
      created_on: '2020-07-21 10:55:17',
      archived_on: null,
      parent_id: 262502,
      child_id: 263382,
      fields: [
        {
          id: 358427,
          content_id: 263382,
          key: 'show_in_new_feed',
          value: '1',
          type: 'boolean',
          position: 1
        },
        {
          id: 358428,
          content_id: 263382,
          key: 'title',
          value: 'Slum Village - "Just Like A Test"',
          type: 'string',
          position: 1
        },
        {
          id: 358556,
          content_id: 263382,
          key: 'xp',
          value: '200',
          type: 'integer',
          position: 1
        },
        {
          id: 358558,
          content_id: 263382,
          key: 'tag',
          value: '2015',
          type: 'string',
          position: 1
        },
        {
          id: 358557,
          content_id: 263382,
          key: 'tag',
          value: 'yes',
          type: 'string',
          position: 2
        },
        {
          id: 358555,
          content_id: 263382,
          key: 'video',
          value: {
            id: 263484,
            slug: 'vimeo-video-440750183',
            type: 'vimeo-video',
            sort: 0,
            status: 'published',
            language: 'en-US',
            brand: 'drumeo',
            total_xp: '150',
            published_on: '2020-07-22 18:30:17',
            created_on: '2020-07-22 18:30:17',
            archived_on: null,
            parent_id: null,
            child_id: null,
            fields: [
              {
                id: 358499,
                content_id: 263484,
                key: 'vimeo_video_id',
                value: '440750183',
                type: 'string',
                position: 1
              },
              {
                id: 358500,
                content_id: 263484,
                key: 'length_in_seconds',
                value: '241',
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
        { key: 'difficulty', value: 'all', type: 'string', position: 1 }
      ],
      data: [
        {
          id: 142657,
          content_id: 263382,
          key: 'original_thumbnail_url',
          value:
            'https://d1923uyy6spedc.cloudfront.net/263382-card-thumbnail-maxres-1595685729.png',
          position: 1
        },
        {
          id: 142658,
          content_id: 263382,
          key: 'thumbnail_url',
          value:
            'https://d1923uyy6spedc.cloudfront.net/263382-card-thumbnail-1595685733.png',
          position: 1
        },
        {
          id: 142667,
          content_id: 263382,
          key: 'resource_name',
          value: 'PDF Sheet Music',
          position: 1
        },
        {
          id: 142668,
          content_id: 263382,
          key: 'resource_url',
          value:
            'https://s3.amazonaws.com/drumeo/courses/pdf/dca-14-the-soul-hop-grooves-of-daru-jones/dca-14e-just-like-a-test-slum-village.pdf',
          position: 1
        },
        {
          id: 142520,
          content_id: 263382,
          key: 'description',
          value:
            '<p>This is a killer, rare track from the legendary Slum Village group.</p>',
          position: 1
        }
      ],
      permissions: [
        {
          id: 1,
          content_id: null,
          content_type: 'course-part',
          permission_id: 1,
          brand: 'drumeo',
          name: 'Drumeo Edge'
        }
      ],
      child_ids: [263382],
      position: 5,
      user_progress: { 149628: [] },
      completed: false,
      started: false,
      progress_percent: 0,
      user_playlists: { 149628: [] },
      is_added_to_primary_playlist: false,
      published_on_in_timezone: {
        date: '2020-07-25 08:00:00.000000',
        timezone_type: 3,
        timezone: 'America/Los_Angeles'
      },
      is_new: false,
      resources: {
        1: {
          resource_id: 142667,
          resource_name: 'PDF Sheet Music',
          resource_url:
            'https://s3.amazonaws.com/drumeo/courses/pdf/dca-14-the-soul-hop-grooves-of-daru-jones/dca-14e-just-like-a-test-slum-village.pdf'
        }
      },
      assignments: [
        {
          id: 263697,
          slug: 'slum-village-just-like-a-test',
          type: 'assignment',
          sort: 0,
          status: 'published',
          language: 'en-US',
          brand: 'drumeo',
          total_xp: '25',
          published_on: '2020-07-25 14:39:29',
          created_on: '2020-07-25 14:39:32',
          archived_on: null,
          parent_id: null,
          child_id: null,
          fields: [
            {
              id: 358912,
              content_id: 263697,
              key: 'soundslice_xml_file_url',
              value:
                'https://d1923uyy6spedc.cloudfront.net/263697-soundslice-xml-file-1595859030.musicxml',
              type: 'string',
              position: 1
            },
            {
              id: 358913,
              content_id: 263697,
              key: 'soundslice_slug',
              value: '434950',
              type: 'string',
              position: 1
            },
            {
              id: 358694,
              content_id: 263697,
              key: 'show_in_new_feed',
              value: '1',
              type: 'boolean',
              position: 1
            },
            {
              id: 358695,
              content_id: 263697,
              key: 'title',
              value: 'Slum Village - "Just Like A Test"',
              type: 'string',
              position: 1
            },
            {
              id: 358696,
              content_id: 263697,
              key: 'xp',
              value: '25',
              type: 'integer',
              position: 1
            },
            { key: 'difficulty', value: 'all', type: 'string', position: 1 }
          ],
          data: [
            {
              id: 142682,
              content_id: 263697,
              key: 'sheet_music_image_url',
              value:
                'https://d1923uyy6spedc.cloudfront.net/263697-sheet-image-1595688001.svg',
              position: 1
            }
          ],
          permissions: [],
          user_progress: { 149628: [] },
          completed: false,
          started: false,
          progress_percent: 0,
          user_playlists: { 149628: [] },
          is_added_to_primary_playlist: false,
          published_on_in_timezone: {
            date: '2020-07-25 07:39:29.000000',
            timezone_type: 3,
            timezone: 'America/Los_Angeles'
          },
          is_new: false,
          xp: 25,
          like_count: 0
        }
      ],
      xp: 225,
      url:
        'https://staging.drumeo.com/laravel/public/members/lessons/course-part/263382',
      stbs: [],
      xp_bonus: '200',
      length_in_seconds: '241',
      last_watch_position_in_seconds: 0,
      like_count: 5
    },
    {
      id: 263383,
      slug: 'jamie-lidell-walk-right-back',
      type: 'course-part',
      sort: 0,
      status: 'published',
      language: 'en-US',
      brand: 'drumeo',
      total_xp: '225',
      published_on: '2020-07-25 15:00:00',
      created_on: '2020-07-21 10:55:52',
      archived_on: null,
      parent_id: 262502,
      child_id: 263383,
      fields: [
        {
          id: 358429,
          content_id: 263383,
          key: 'show_in_new_feed',
          value: '1',
          type: 'boolean',
          position: 1
        },
        {
          id: 358430,
          content_id: 263383,
          key: 'title',
          value: 'Jamie Lidell - "Walk Right Back"',
          type: 'string',
          position: 1
        },
        {
          id: 358546,
          content_id: 263383,
          key: 'xp',
          value: '200',
          type: 'integer',
          position: 1
        },
        {
          id: 358553,
          content_id: 263383,
          key: 'tag',
          value: 'a',
          type: 'string',
          position: 1
        },
        {
          id: 358552,
          content_id: 263383,
          key: 'tag',
          value: 'building',
          type: 'string',
          position: 2
        },
        {
          id: 358554,
          content_id: 263383,
          key: 'tag',
          value: 'beginning',
          type: 'string',
          position: 3
        },
        {
          id: 358545,
          content_id: 263383,
          key: 'video',
          value: {
            id: 263482,
            slug: 'vimeo-video-440750295',
            type: 'vimeo-video',
            sort: 0,
            status: 'published',
            language: 'en-US',
            brand: 'drumeo',
            total_xp: '150',
            published_on: '2020-07-22 18:30:16',
            created_on: '2020-07-22 18:30:16',
            archived_on: null,
            parent_id: null,
            child_id: null,
            fields: [
              {
                id: 358497,
                content_id: 263482,
                key: 'vimeo_video_id',
                value: '440750295',
                type: 'string',
                position: 1
              },
              {
                id: 358498,
                content_id: 263482,
                key: 'length_in_seconds',
                value: '614',
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
        { key: 'difficulty', value: 'all', type: 'string', position: 1 }
      ],
      data: [
        {
          id: 142659,
          content_id: 263383,
          key: 'original_thumbnail_url',
          value:
            'https://d1923uyy6spedc.cloudfront.net/263383-card-thumbnail-maxres-1595685785.png',
          position: 1
        },
        {
          id: 142660,
          content_id: 263383,
          key: 'thumbnail_url',
          value:
            'https://d1923uyy6spedc.cloudfront.net/263383-card-thumbnail-1595685793.png',
          position: 1
        },
        {
          id: 142669,
          content_id: 263383,
          key: 'resource_name',
          value: 'PDF Sheet Music',
          position: 1
        },
        {
          id: 142670,
          content_id: 263383,
          key: 'resource_url',
          value:
            'https://s3.amazonaws.com/drumeo/courses/pdf/dca-14-the-soul-hop-grooves-of-daru-jones/dca-14f-walk-right-back-jamie-lidell-conclusion.pdf',
          position: 1
        },
        {
          id: 142519,
          content_id: 263383,
          key: 'description',
          value: "<p>The title track off of Jamie Lidell's 2016 album.</p>",
          position: 1
        }
      ],
      permissions: [
        {
          id: 1,
          content_id: null,
          content_type: 'course-part',
          permission_id: 1,
          brand: 'drumeo',
          name: 'Drumeo Edge'
        }
      ],
      child_ids: [263383],
      position: 6,
      user_progress: { 149628: [] },
      completed: false,
      started: false,
      progress_percent: 0,
      user_playlists: { 149628: [] },
      is_added_to_primary_playlist: false,
      published_on_in_timezone: {
        date: '2020-07-25 08:00:00.000000',
        timezone_type: 3,
        timezone: 'America/Los_Angeles'
      },
      is_new: false,
      resources: {
        1: {
          resource_id: 142669,
          resource_name: 'PDF Sheet Music',
          resource_url:
            'https://s3.amazonaws.com/drumeo/courses/pdf/dca-14-the-soul-hop-grooves-of-daru-jones/dca-14f-walk-right-back-jamie-lidell-conclusion.pdf'
        }
      },
      assignments: [
        {
          id: 263698,
          slug: 'jamie-lidell-walk-right-back',
          type: 'assignment',
          sort: 0,
          status: 'published',
          language: 'en-US',
          brand: 'drumeo',
          total_xp: '25',
          published_on: '2020-07-25 14:44:58',
          created_on: '2020-07-25 14:45:01',
          archived_on: null,
          parent_id: null,
          child_id: null,
          fields: [
            {
              id: 358914,
              content_id: 263698,
              key: 'soundslice_xml_file_url',
              value:
                'https://d1923uyy6spedc.cloudfront.net/263698-soundslice-xml-file-1595859430.musicxml',
              type: 'string',
              position: 1
            },
            {
              id: 358915,
              content_id: 263698,
              key: 'soundslice_slug',
              value: '434952',
              type: 'string',
              position: 1
            },
            {
              id: 358697,
              content_id: 263698,
              key: 'show_in_new_feed',
              value: '1',
              type: 'boolean',
              position: 1
            },
            {
              id: 358698,
              content_id: 263698,
              key: 'title',
              value: 'Jamie Lidell - "Walk Right Back"',
              type: 'string',
              position: 1
            },
            {
              id: 358699,
              content_id: 263698,
              key: 'xp',
              value: '25',
              type: 'integer',
              position: 1
            },
            { key: 'difficulty', value: 'all', type: 'string', position: 1 }
          ],
          data: [
            {
              id: 142683,
              content_id: 263698,
              key: 'sheet_music_image_url',
              value:
                'https://d1923uyy6spedc.cloudfront.net/263698-sheet-image-1595688346.svg',
              position: 1
            }
          ],
          permissions: [],
          user_progress: { 149628: [] },
          completed: false,
          started: false,
          progress_percent: 0,
          user_playlists: { 149628: [] },
          is_added_to_primary_playlist: false,
          published_on_in_timezone: {
            date: '2020-07-25 07:44:58.000000',
            timezone_type: 3,
            timezone: 'America/Los_Angeles'
          },
          is_new: false,
          xp: 25,
          like_count: 0
        }
      ],
      xp: 225,
      url:
        'https://staging.drumeo.com/laravel/public/members/lessons/course-part/263383',
      stbs: [],
      xp_bonus: '200',
      length_in_seconds: '614',
      last_watch_position_in_seconds: 0,
      like_count: 6
    }
  ],
  instructors: [
    {
      id: 220967,
      slug: 'daru-jones',
      type: 'instructor',
      sort: 0,
      status: 'published',
      language: 'en-US',
      brand: 'drumeo',
      total_xp: null,
      published_on: '2019-02-26 16:02:50',
      created_on: '2019-02-26 16:02:12',
      archived_on: null,
      parent_id: null,
      child_id: null,
      fields: [
        {
          id: 261271,
          content_id: 220967,
          key: 'title',
          value: 'Daru Jones',
          type: 'string',
          position: 1
        },
        {
          id: 261272,
          content_id: 220967,
          key: 'name',
          value: 'Daru Jones',
          type: 'string',
          position: 1
        }
      ],
      data: [
        {
          id: 109626,
          content_id: 220967,
          key: 'head_shot_picture_url',
          value:
            'https://d1923uyy6spedc.cloudfront.net/220967-avatar-1572358845.jpg',
          position: 1
        },
        {
          id: 109627,
          content_id: 220967,
          key: 'biography',
          value:
            'Daru Jones is a Grammy-award winner with an impressive level of experience performing and recording, and producing at the highest level through his own label: Rusic Records. He has worked with incredible artists and producers, such as Jack White, Slum Village, Talib Kweli, Black Milk, Dwight Yoakam, Jamie Lidell, Pete Rock, Salaam Remi, Gloria Gaynor, Kim Burrell, Q-Tip, Mos Def, and Lorenzo Jovanotti, just to name a few. This level of exposure has led him to play on coveted stages, including One Mic: Hip-Hop Culture Worldwide, the 2013 Grammy Awards, Austin City Limits, Rock The Bells Festival, Montreux Jazz Festival, The David Letterman Show, Jools Holland, The Colbert Report, Saturday Night Live, and MTV. ',
          position: 1
        }
      ],
      permissions: []
    }
  ],
  video_playback_endpoints: [
    {
      file:
        'https://player.vimeo.com/external/440749961.sd.mp4?s=4ac4f77c50cb5f9994a544ffc75a93146c12b4c6&profile_id=139&oauth2_token_id=1284792283',
      width: 426,
      height: 240
    },
    {
      file:
        'https://player.vimeo.com/external/440749961.sd.mp4?s=4ac4f77c50cb5f9994a544ffc75a93146c12b4c6&profile_id=164&oauth2_token_id=1284792283',
      width: 640,
      height: 360
    },
    {
      file:
        'https://player.vimeo.com/external/440749961.sd.mp4?s=4ac4f77c50cb5f9994a544ffc75a93146c12b4c6&profile_id=165&oauth2_token_id=1284792283',
      width: 960,
      height: 540
    },
    {
      file:
        'https://player.vimeo.com/external/440749961.hd.mp4?s=0bd3c88f773d4e2b10e74a34cbd52500f47fb678&profile_id=174&oauth2_token_id=1284792283',
      width: 1280,
      height: 720
    },
    {
      file:
        'https://player.vimeo.com/external/440749961.hd.mp4?s=0bd3c88f773d4e2b10e74a34cbd52500f47fb678&profile_id=175&oauth2_token_id=1284792283',
      width: 1920,
      height: 1080
    },
    {
      file:
        'https://player.vimeo.com/external/440749961.hd.mp4?s=0bd3c88f773d4e2b10e74a34cbd52500f47fb678&profile_id=170&oauth2_token_id=1284792283',
      width: 2560,
      height: 1440
    },
    {
      file:
        'https://player.vimeo.com/external/440749961.hd.mp4?s=0bd3c88f773d4e2b10e74a34cbd52500f47fb678&profile_id=172&oauth2_token_id=1284792283',
      width: 3840,
      height: 2160
    }
  ],
  video_poster_image_url:
    'https://i.vimeocdn.com/video/928420043_1280x720.jpg?r=pad',
  captions: [],
  hlsManifestUrl:
    'https://player.vimeo.com/external/440749961.m3u8?s=a4c7f26e9c6e0ef595fb5ad9415289a51086fb13&oauth2_token_id=1284792283'
};
export const mp3VideoMock = {
  id: 245323,
  slug: 'funk-you-not',
  type: 'play-along',
  sort: 0,
  status: 'published',
  language: 'en-US',
  brand: 'drumeo',
  total_xp: '175',
  published_on: '2020-02-28 16:00:00',
  created_on: '2020-02-04 11:12:34',
  archived_on: null,
  parent_id: null,
  child_id: null,
  fields: [
    {
      id: 327781,
      content_id: 245323,
      key: 'title',
      value: 'Funk You Not',
      type: 'string',
      position: 1
    },
    {
      id: 327782,
      content_id: 245323,
      key: 'difficulty',
      value: '4',
      type: 'string',
      position: 1
    },
    {
      id: 327783,
      content_id: 245323,
      key: 'xp',
      value: '150',
      type: 'integer',
      position: 1
    },
    {
      id: 327784,
      content_id: 245323,
      key: 'artist',
      value: 'Daru Jones',
      type: 'string',
      position: 1
    },
    {
      id: 331173,
      content_id: 245323,
      key: 'style',
      value: 'Electronic',
      type: 'string',
      position: 1
    },
    {
      id: 331174,
      content_id: 245323,
      key: 'topic',
      value: 'Electronic',
      type: 'string',
      position: 1
    },
    {
      id: 331176,
      content_id: 245323,
      key: 'tag',
      value: 'intermediate',
      type: 'string',
      position: 1
    },
    {
      id: 331185,
      content_id: 245323,
      key: 'bpm',
      value: '93',
      type: 'string',
      position: 1
    },
    {
      id: 331175,
      content_id: 245323,
      key: 'tag',
      value: '4',
      type: 'string',
      position: 2
    },
    {
      id: 331177,
      content_id: 245323,
      key: 'tag',
      value: 'funk you not',
      type: 'string',
      position: 3
    },
    {
      id: 331179,
      content_id: 245323,
      key: 'tag',
      value: 'play along',
      type: 'string',
      position: 4
    },
    {
      id: 331180,
      content_id: 245323,
      key: 'tag',
      value: 'play-along',
      type: 'string',
      position: 5
    },
    {
      id: 331178,
      content_id: 245323,
      key: 'tag',
      value: 'electronic',
      type: 'string',
      position: 6
    },
    {
      id: 331183,
      content_id: 245323,
      key: 'tag',
      value: 'play alongs',
      type: 'string',
      position: 7
    },
    {
      id: 331182,
      content_id: 245323,
      key: 'tag',
      value: 'jam tracks',
      type: 'string',
      position: 8
    },
    {
      id: 331181,
      content_id: 245323,
      key: 'tag',
      value: 'jam track',
      type: 'string',
      position: 9
    },
    {
      id: 331184,
      content_id: 245323,
      key: 'tag',
      value: 'play-alongs',
      type: 'string',
      position: 10
    },
    {
      id: 327785,
      content_id: 245323,
      key: 'instructor',
      value: {
        id: 220967,
        slug: 'daru-jones',
        type: 'instructor',
        sort: 0,
        status: 'published',
        language: 'en-US',
        brand: 'drumeo',
        total_xp: null,
        published_on: '2019-02-26 16:02:50',
        created_on: '2019-02-26 16:02:12',
        archived_on: null,
        parent_id: null,
        child_id: null,
        fields: [
          {
            id: 261271,
            content_id: 220967,
            key: 'title',
            value: 'Daru Jones',
            type: 'string',
            position: 1
          },
          {
            id: 261272,
            content_id: 220967,
            key: 'name',
            value: 'Daru Jones',
            type: 'string',
            position: 1
          }
        ],
        data: [
          {
            id: 109626,
            content_id: 220967,
            key: 'head_shot_picture_url',
            value:
              'https://d1923uyy6spedc.cloudfront.net/220967-avatar-1572358845.jpg',
            position: 1
          },
          {
            id: 109627,
            content_id: 220967,
            key: 'biography',
            value:
              'Daru Jones is a Grammy-award winner with an impressive level of experience performing and recording, and producing at the highest level through his own label: Rusic Records. He has worked with incredible artists and producers, such as Jack White, Slum Village, Talib Kweli, Black Milk, Dwight Yoakam, Jamie Lidell, Pete Rock, Salaam Remi, Gloria Gaynor, Kim Burrell, Q-Tip, Mos Def, and Lorenzo Jovanotti, just to name a few. This level of exposure has led him to play on coveted stages, including One Mic: Hip-Hop Culture Worldwide, the 2013 Grammy Awards, Austin City Limits, Rock The Bells Festival, Montreux Jazz Festival, The David Letterman Show, Jools Holland, The Colbert Report, Saturday Night Live, and MTV. ',
            position: 1
          }
        ],
        permissions: []
      },
      type: 'content',
      position: 1
    },
    {
      id: 331172,
      content_id: 245323,
      key: 'video',
      value: {
        id: 246546,
        slug: 'vimeo-video-393716651',
        type: 'vimeo-video',
        sort: 0,
        status: 'published',
        language: 'en-US',
        brand: 'drumeo',
        total_xp: '150',
        published_on: '2020-02-25 17:00:22',
        created_on: '2020-02-25 17:00:22',
        archived_on: null,
        parent_id: null,
        child_id: null,
        fields: [
          {
            id: 330258,
            content_id: 246546,
            key: 'vimeo_video_id',
            value: '393716651',
            type: 'string',
            position: 1
          },
          {
            id: 330259,
            content_id: 246546,
            key: 'length_in_seconds',
            value: '331',
            type: 'integer',
            position: 1
          }
        ],
        data: [],
        permissions: []
      },
      type: 'content',
      position: 1
    }
  ],
  data: [
    {
      id: 123392,
      content_id: 245323,
      key: 'thumbnail_url',
      value:
        'https://dzryyo1we6bm3.cloudfront.net/thumbnails/22911_thumbnail_360p.jpg',
      position: 1
    },
    {
      id: 123393,
      content_id: 245323,
      key: 'original_thumbnail_url',
      value:
        'https://dzryyo1we6bm3.cloudfront.net/card-thumbnails/play-alongs/1080/drumeo-pa-electronic.jpg',
      position: 1
    },
    {
      id: 123394,
      content_id: 245323,
      key: 'mp3_no_drums_no_click_url',
      value:
        'https://s3.amazonaws.com/drumeo/play-along-resources/funk-you-not/funk-you-not-drums-false-click-false.mp3',
      position: 1
    },
    {
      id: 123395,
      content_id: 245323,
      key: 'resource_name',
      value: 'MP3 Without Click',
      position: 1
    },
    {
      id: 123396,
      content_id: 245323,
      key: 'resource_url',
      value:
        'https://s3.amazonaws.com/drumeo/play-along-resources/funk-you-not/funk-you-not-drums-false-click-false.mp3',
      position: 1
    },
    {
      id: 123397,
      content_id: 245323,
      key: 'mp3_no_drums_yes_click_url',
      value:
        'https://s3.amazonaws.com/drumeo/play-along-resources/funk-you-not/funk-you-not-drums-false-click-true.mp3',
      position: 1
    },
    {
      id: 123398,
      content_id: 245323,
      key: 'mp3_yes_drums_no_click_url',
      value:
        'https://s3.amazonaws.com/drumeo/play-along-resources/funk-you-not/funk-you-not-drums-true-click-false.mp3',
      position: 1
    },
    {
      id: 123399,
      content_id: 245323,
      key: 'mp3_yes_drums_yes_click_url',
      value:
        'https://s3.amazonaws.com/drumeo/play-along-resources/funk-you-not/funk-you-not-drums-true-click-true.mp3',
      position: 1
    },
    {
      id: 123400,
      content_id: 245323,
      key: 'resource_name',
      value: 'PDF Chart',
      position: 2
    },
    {
      id: 123401,
      content_id: 245323,
      key: 'resource_url',
      value:
        'https://d1923uyy6spedc.cloudfront.net/245323-resource-1582899677.pdf',
      position: 2
    }
  ],
  permissions: [
    {
      id: 1,
      content_id: null,
      content_type: 'play-along',
      permission_id: 1,
      brand: 'drumeo',
      name: 'Drumeo Edge'
    }
  ],
  user_progress: { 149628: [] },
  completed: false,
  started: false,
  progress_percent: 0,
  user_playlists: { 149628: [] },
  is_added_to_primary_playlist: false,
  published_on_in_timezone: {
    date: '2020-02-28 08:00:00.000000',
    timezone_type: 3,
    timezone: 'America/Los_Angeles'
  },
  is_new: false,
  resources: [
    {
      resource_id: 123395,
      resource_name: 'MP3 Without Click',
      resource_url:
        'https://s3.amazonaws.com/drumeo/play-along-resources/funk-you-not/funk-you-not-drums-false-click-false.mp3'
    },
    {
      resource_id: 123400,
      resource_name: 'PDF Chart',
      resource_url:
        'https://d1923uyy6spedc.cloudfront.net/245323-resource-1582899677.pdf'
    }
  ],
  assignments: [
    {
      id: 246968,
      slug: '"funk-you-not"-chart--practice-along',
      type: 'assignment',
      sort: 0,
      status: 'published',
      language: 'en-US',
      brand: 'drumeo',
      total_xp: '25',
      published_on: '2020-02-28 12:17:16',
      created_on: '2020-02-28 12:17:17',
      archived_on: null,
      parent_id: null,
      child_id: null,
      fields: [
        {
          id: 331186,
          content_id: 246968,
          key: 'title',
          value: '"Funk You Not" Chart',
          type: 'string',
          position: 1
        },
        {
          id: 331187,
          content_id: 246968,
          key: 'xp',
          value: '25',
          type: 'integer',
          position: 1
        },
        { key: 'difficulty', value: 'all', type: 'string', position: 1 }
      ],
      data: [
        {
          id: 123402,
          content_id: 246968,
          key: 'sheet_music_image_url',
          value:
            'https://d1923uyy6spedc.cloudfront.net/246968-sheet-image-1582899718.svg',
          position: 1
        }
      ],
      permissions: [],
      user_progress: { 149628: [] },
      completed: false,
      started: false,
      progress_percent: 0,
      user_playlists: { 149628: [] },
      is_added_to_primary_playlist: false,
      published_on_in_timezone: {
        date: '2020-02-28 04:17:16.000000',
        timezone_type: 3,
        timezone: 'America/Los_Angeles'
      },
      is_new: false,
      xp: 25,
      like_count: 0
    }
  ],
  xp: 175,
  url:
    'https://staging.drumeo.com/laravel/public/members/lessons/play-alongs/245323',
  xp_bonus: 150,
  length_in_seconds: '331',
  last_watch_position_in_seconds: 0,
  like_count: 7,
  next_lesson: {
    id: 243773,
    slug: 'up-tempo-swing',
    type: 'play-along',
    sort: 0,
    status: 'published',
    language: 'en-US',
    brand: 'drumeo',
    total_xp: '225',
    published_on: '2020-02-21 16:00:00',
    created_on: '2020-01-22 11:35:12',
    archived_on: null,
    parent_id: null,
    child_id: null,
    fields: [
      {
        id: 329137,
        content_id: 243773,
        key: 'artist',
        value: 'The JDS Quartet',
        type: 'string',
        position: 1
      },
      {
        id: 329138,
        content_id: 243773,
        key: 'topic',
        value: 'Jazz',
        type: 'string',
        position: 1
      },
      {
        id: 329139,
        content_id: 243773,
        key: 'tag',
        value: 'jazz',
        type: 'string',
        position: 1
      },
      {
        id: 329155,
        content_id: 243773,
        key: 'bpm',
        value: '280',
        type: 'string',
        position: 1
      },
      {
        id: 324826,
        content_id: 243773,
        key: 'title',
        value: 'Up-Tempo Swing',
        type: 'string',
        position: 1
      },
      {
        id: 324827,
        content_id: 243773,
        key: 'difficulty',
        value: '7',
        type: 'string',
        position: 1
      },
      {
        id: 324828,
        content_id: 243773,
        key: 'xp',
        value: '200',
        type: 'integer',
        position: 1
      },
      {
        id: 324829,
        content_id: 243773,
        key: 'style',
        value: 'Jazz',
        type: 'string',
        position: 1
      },
      {
        id: 329141,
        content_id: 243773,
        key: 'tag',
        value: '7',
        type: 'string',
        position: 2
      },
      {
        id: 329140,
        content_id: 243773,
        key: 'tag',
        value: 'advanced',
        type: 'string',
        position: 3
      },
      {
        id: 329142,
        content_id: 243773,
        key: 'tag',
        value: 'mike michalkow',
        type: 'string',
        position: 4
      },
      {
        id: 329144,
        content_id: 243773,
        key: 'tag',
        value: 'play-along',
        type: 'string',
        position: 5
      },
      {
        id: 329143,
        content_id: 243773,
        key: 'tag',
        value: 'play along',
        type: 'string',
        position: 6
      },
      {
        id: 329145,
        content_id: 243773,
        key: 'tag',
        value: 'jam track',
        type: 'string',
        position: 7
      },
      {
        id: 329146,
        content_id: 243773,
        key: 'tag',
        value: 'jam tracks',
        type: 'string',
        position: 8
      },
      {
        id: 329148,
        content_id: 243773,
        key: 'tag',
        value: 'play-alongs',
        type: 'string',
        position: 9
      },
      {
        id: 329147,
        content_id: 243773,
        key: 'tag',
        value: 'play alongs',
        type: 'string',
        position: 10
      },
      {
        id: 329150,
        content_id: 243773,
        key: 'tag',
        value: 'the jds quartet',
        type: 'string',
        position: 11
      },
      {
        id: 329149,
        content_id: 243773,
        key: 'tag',
        value: 'jds quartet',
        type: 'string',
        position: 12
      },
      {
        id: 329153,
        content_id: 243773,
        key: 'tag',
        value: 'swing',
        type: 'string',
        position: 13
      },
      {
        id: 329152,
        content_id: 243773,
        key: 'tag',
        value: 'up-tempo',
        type: 'string',
        position: 14
      },
      {
        id: 329151,
        content_id: 243773,
        key: 'tag',
        value: 'up tempo',
        type: 'string',
        position: 15
      },
      {
        id: 329135,
        content_id: 243773,
        key: 'video',
        value: {
          id: 245349,
          slug: 'vimeo-video-389286917',
          type: 'vimeo-video',
          sort: 0,
          status: 'published',
          language: 'en-US',
          brand: 'drumeo',
          total_xp: '150',
          published_on: '2020-02-04 17:30:14',
          created_on: '2020-02-04 17:30:14',
          archived_on: null,
          parent_id: null,
          child_id: null,
          fields: [
            {
              id: 327961,
              content_id: 245349,
              key: 'vimeo_video_id',
              value: '389286917',
              type: 'string',
              position: 1
            },
            {
              id: 327962,
              content_id: 245349,
              key: 'length_in_seconds',
              value: '178',
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
        id: 324830,
        content_id: 243773,
        key: 'instructor',
        value: {
          id: 31878,
          slug: 'mike-michalkow',
          type: 'instructor',
          sort: 0,
          status: 'published',
          language: 'en-US',
          brand: 'drumeo',
          total_xp: null,
          published_on: '2017-12-13 17:23:20',
          created_on: '2017-12-13 17:23:20',
          archived_on: null,
          parent_id: null,
          child_id: null,
          fields: [
            {
              id: 60884,
              content_id: 31878,
              key: 'name',
              value: 'Mike Michalkow',
              type: 'string',
              position: 1
            }
          ],
          data: [
            {
              id: 18668,
              content_id: 31878,
              key: 'head_shot_picture_url',
              value:
                'https://s3.amazonaws.com/drumeo-assets/instructors/mike-michalkow.png?v=1513185407',
              position: 1
            },
            {
              id: 18669,
              content_id: 31878,
              key: 'biography',
              value:
                'Mike Michalkow has been teaching drums and percussion for over 20 years, having studied under master drummers Dom Famularo, Jim Chapin, Chuck Silverman, Thomas Lang, John “JR” Robinson, Peter Magadini, and Virgil Donati. Known as a versatile instructor, Mike’s simplified but comprehensive teaching methods have helped thousands of drummers around the world reach their goals, through bestsellers like the “Drumming System”, “Jazz Drumming System”, “Latin Drumming System”, “Moeller Method Secrets”, and “Total Rock Drummer”.',
              position: 1
            }
          ],
          permissions: []
        },
        type: 'content',
        position: 1
      }
    ],
    data: [
      {
        id: 122624,
        content_id: 243773,
        key: 'mp3_yes_drums_yes_click_url',
        value:
          'https://s3.amazonaws.com/drumeo/play-along-resources/up-tempo-swing/up-tempo-swing-drums-true-click-true.mp3',
        position: 1
      },
      {
        id: 122617,
        content_id: 243773,
        key: 'thumbnail_url',
        value:
          'https://dzryyo1we6bm3.cloudfront.net/thumbnails/30191_thumbnail_360p.jpg',
        position: 1
      },
      {
        id: 122618,
        content_id: 243773,
        key: 'original_thumbnail_url',
        value:
          'https://drumeo.s3.amazonaws.com/card-thumbnails/play-alongs/550/drumeo-pa-jazz.jpg',
        position: 1
      },
      {
        id: 122619,
        content_id: 243773,
        key: 'mp3_no_drums_no_click_url',
        value:
          'https://s3.amazonaws.com/drumeo/play-along-resources/up-tempo-swing/up-tempo-swing-drums-false-click-false.mp3',
        position: 1
      },
      {
        id: 122620,
        content_id: 243773,
        key: 'resource_name',
        value: 'MP3 Without Click',
        position: 1
      },
      {
        id: 122621,
        content_id: 243773,
        key: 'resource_url',
        value:
          'https://s3.amazonaws.com/drumeo/play-along-resources/up-tempo-swing/up-tempo-swing-drums-false-click-false.mp3',
        position: 1
      },
      {
        id: 122622,
        content_id: 243773,
        key: 'mp3_no_drums_yes_click_url',
        value:
          'https://s3.amazonaws.com/drumeo/play-along-resources/up-tempo-swing/up-tempo-swing-drums-false-click-true.mp3',
        position: 1
      },
      {
        id: 122623,
        content_id: 243773,
        key: 'mp3_yes_drums_no_click_url',
        value:
          'https://s3.amazonaws.com/drumeo/play-along-resources/up-tempo-swing/up-tempo-swing-drums-true-click-false.mp3',
        position: 1
      },
      {
        id: 122625,
        content_id: 243773,
        key: 'resource_name',
        value: 'PDF Chart',
        position: 2
      },
      {
        id: 122626,
        content_id: 243773,
        key: 'resource_url',
        value:
          'https://d1923uyy6spedc.cloudfront.net/243773-resource-1581945054.pdf',
        position: 2
      }
    ],
    permissions: [
      {
        id: 1,
        content_id: null,
        content_type: 'play-along',
        permission_id: 1,
        brand: 'drumeo',
        name: 'Drumeo Edge'
      }
    ],
    user_progress: { 149628: [] },
    completed: false,
    started: false,
    progress_percent: 0,
    user_playlists: { 149628: [] },
    is_added_to_primary_playlist: false,
    published_on_in_timezone: {
      date: '2020-02-21 08:00:00.000000',
      timezone_type: 3,
      timezone: 'America/Los_Angeles'
    },
    is_new: false,
    url:
      'https://staging.drumeo.com/laravel/public/members/lessons/play-alongs/243773',
    xp: 200,
    xp_bonus: 200
  },
  previous_lesson: {
    id: 246167,
    slug: 'the-odd-life',
    type: 'play-along',
    sort: 0,
    status: 'published',
    language: 'en-US',
    brand: 'drumeo',
    total_xp: '175',
    published_on: '2020-03-07 16:00:00',
    created_on: '2020-02-19 11:11:18',
    archived_on: null,
    parent_id: null,
    child_id: null,
    fields: [
      {
        id: 329284,
        content_id: 246167,
        key: 'title',
        value: 'The Odd Life',
        type: 'string',
        position: 1
      },
      {
        id: 329285,
        content_id: 246167,
        key: 'difficulty',
        value: '6',
        type: 'string',
        position: 1
      },
      {
        id: 332749,
        content_id: 246167,
        key: 'xp',
        value: '150',
        type: 'integer',
        position: 1
      },
      {
        id: 332750,
        content_id: 246167,
        key: 'bpm',
        value: '107',
        type: 'string',
        position: 1
      },
      {
        id: 332751,
        content_id: 246167,
        key: 'style',
        value: 'Electronic',
        type: 'string',
        position: 1
      },
      {
        id: 332752,
        content_id: 246167,
        key: 'artist',
        value: 'Tim Proznick',
        type: 'string',
        position: 1
      },
      {
        id: 332753,
        content_id: 246167,
        key: 'topic',
        value: 'Electronic',
        type: 'string',
        position: 1
      },
      {
        id: 332756,
        content_id: 246167,
        key: 'tag',
        value: '6',
        type: 'string',
        position: 1
      },
      {
        id: 332905,
        content_id: 246167,
        key: 'style',
        value: 'Odd-Time',
        type: 'string',
        position: 2
      },
      {
        id: 332906,
        content_id: 246167,
        key: 'topic',
        value: 'Odd-Time',
        type: 'string',
        position: 2
      },
      {
        id: 332755,
        content_id: 246167,
        key: 'tag',
        value: 'intermediate',
        type: 'string',
        position: 2
      },
      {
        id: 332758,
        content_id: 246167,
        key: 'tag',
        value: 'play along',
        type: 'string',
        position: 3
      },
      {
        id: 332759,
        content_id: 246167,
        key: 'tag',
        value: 'play-along',
        type: 'string',
        position: 4
      },
      {
        id: 332757,
        content_id: 246167,
        key: 'tag',
        value: 'the odd life',
        type: 'string',
        position: 5
      },
      {
        id: 332761,
        content_id: 246167,
        key: 'tag',
        value: 'play alongs',
        type: 'string',
        position: 6
      },
      {
        id: 332760,
        content_id: 246167,
        key: 'tag',
        value: 'electronic',
        type: 'string',
        position: 7
      },
      {
        id: 332762,
        content_id: 246167,
        key: 'tag',
        value: 'play-alongs',
        type: 'string',
        position: 8
      },
      {
        id: 332764,
        content_id: 246167,
        key: 'tag',
        value: 'jam tracks',
        type: 'string',
        position: 9
      },
      {
        id: 332763,
        content_id: 246167,
        key: 'tag',
        value: 'jam track',
        type: 'string',
        position: 10
      },
      {
        id: 329286,
        content_id: 246167,
        key: 'instructor',
        value: {
          id: 235178,
          slug: 'tim-proznick',
          type: 'instructor',
          sort: 0,
          status: 'published',
          language: 'en-US',
          brand: 'drumeo',
          total_xp: null,
          published_on: '2019-10-17 14:19:03',
          created_on: '2019-10-17 14:19:06',
          archived_on: null,
          parent_id: null,
          child_id: null,
          fields: [
            {
              id: 304571,
              content_id: 235178,
              key: 'name',
              value: 'Tim Proznick',
              type: 'string',
              position: 1
            }
          ],
          data: [
            {
              id: 109298,
              content_id: 235178,
              key: 'biography',
              value:
                '<p>Tim Proznick is an incredible and versatile professional drummer hailing from British Columbia, Vancouver, Canada. His unmatched chops and incredible sense of groove have helped him carve a name for himself in the world of percussion as a go-to musician and a great source of inspiration for up-and-coming drummers. Tim’s mastery of the drum-set has led him to perform with projects and artists such as Superjaded, Hey Ocean!, Kim Churchill, and Potatohead People.</p>',
              position: 1
            },
            {
              id: 109299,
              content_id: 235178,
              key: 'head_shot_picture_url',
              value:
                'https://d1923uyy6spedc.cloudfront.net/235178-avatar-1571828677.jpg',
              position: 1
            }
          ],
          permissions: []
        },
        type: 'content',
        position: 1
      },
      {
        id: 332754,
        content_id: 246167,
        key: 'video',
        value: {
          id: 247344,
          slug: 'vimeo-video-395297834',
          type: 'vimeo-video',
          sort: 0,
          status: 'published',
          language: 'en-US',
          brand: 'drumeo',
          total_xp: '150',
          published_on: '2020-03-03 22:00:42',
          created_on: '2020-03-03 22:00:42',
          archived_on: null,
          parent_id: null,
          child_id: null,
          fields: [
            {
              id: 332261,
              content_id: 247344,
              key: 'vimeo_video_id',
              value: '395297834',
              type: 'string',
              position: 1
            },
            {
              id: 332262,
              content_id: 247344,
              key: 'length_in_seconds',
              value: '244',
              type: 'integer',
              position: 1
            }
          ],
          data: [],
          permissions: []
        },
        type: 'content',
        position: 1
      }
    ],
    data: [
      {
        id: 124461,
        content_id: 246167,
        key: 'thumbnail_url',
        value:
          'https://dzryyo1we6bm3.cloudfront.net/thumbnails/22911_thumbnail_360p.jpg',
        position: 1
      },
      {
        id: 124462,
        content_id: 246167,
        key: 'original_thumbnail_url',
        value:
          'https://dzryyo1we6bm3.cloudfront.net/card-thumbnails/play-alongs/1080/drumeo-pa-electronic.jpg',
        position: 1
      },
      {
        id: 124463,
        content_id: 246167,
        key: 'mp3_no_drums_no_click_url',
        value:
          'https://s3.amazonaws.com/drumeo/play-along-resources/the-odd-life/the-odd-life-drums-false-click-false.mp3',
        position: 1
      },
      {
        id: 124464,
        content_id: 246167,
        key: 'mp3_no_drums_yes_click_url',
        value:
          'https://s3.amazonaws.com/drumeo/play-along-resources/the-odd-life/the-odd-life-drums-false-click-true.mp3',
        position: 1
      },
      {
        id: 124465,
        content_id: 246167,
        key: 'mp3_yes_drums_no_click_url',
        value:
          'https://s3.amazonaws.com/drumeo/play-along-resources/the-odd-life/the-odd-life-drums-true-click-false.mp3',
        position: 1
      },
      {
        id: 124466,
        content_id: 246167,
        key: 'mp3_yes_drums_yes_click_url',
        value:
          'https://s3.amazonaws.com/drumeo/play-along-resources/the-odd-life/the-odd-life-drums-true-click-true.mp3',
        position: 1
      },
      {
        id: 124467,
        content_id: 246167,
        key: 'resource_name',
        value: 'MP3 Without Click',
        position: 1
      },
      {
        id: 124468,
        content_id: 246167,
        key: 'resource_url',
        value:
          'https://s3.amazonaws.com/drumeo/play-along-resources/the-odd-life/the-odd-life-drums-false-click-false.mp3',
        position: 1
      },
      {
        id: 124469,
        content_id: 246167,
        key: 'resource_name',
        value: 'MP3 With Click',
        position: 2
      },
      {
        id: 124470,
        content_id: 246167,
        key: 'resource_url',
        value:
          'https://s3.amazonaws.com/drumeo/play-along-resources/the-odd-life/the-odd-life-drums-false-click-true.mp3',
        position: 2
      },
      {
        id: 124471,
        content_id: 246167,
        key: 'resource_name',
        value: 'PDF Chart',
        position: 3
      },
      {
        id: 124472,
        content_id: 246167,
        key: 'resource_url',
        value:
          'https://d1923uyy6spedc.cloudfront.net/246167-resource-1583500179.pdf',
        position: 3
      }
    ],
    permissions: [
      {
        id: 1,
        content_id: null,
        content_type: 'play-along',
        permission_id: 1,
        brand: 'drumeo',
        name: 'Drumeo Edge'
      }
    ],
    user_progress: { 149628: [] },
    completed: false,
    started: false,
    progress_percent: 0,
    user_playlists: { 149628: [] },
    is_added_to_primary_playlist: false,
    published_on_in_timezone: {
      date: '2020-03-07 08:00:00.000000',
      timezone_type: 3,
      timezone: 'America/Los_Angeles'
    },
    is_new: false,
    url:
      'https://staging.drumeo.com/laravel/public/members/lessons/play-alongs/246167',
    xp: 150,
    xp_bonus: 150
  },
  related_lessons: [
    {
      id: 261676,
      slug: 'xeno-bounce',
      type: 'play-along',
      sort: 0,
      status: 'published',
      language: 'en-US',
      brand: 'drumeo',
      total_xp: '175',
      published_on: '2020-07-18 15:00:00',
      created_on: '2020-06-29 10:47:34',
      archived_on: null,
      parent_id: null,
      child_id: null,
      fields: [
        {
          id: 358175,
          content_id: 261676,
          key: 'style',
          value: 'Funk',
          type: 'string',
          position: 1
        },
        {
          id: 358178,
          content_id: 261676,
          key: 'topic',
          value: 'Funk',
          type: 'string',
          position: 1
        },
        {
          id: 358180,
          content_id: 261676,
          key: 'bpm',
          value: '130',
          type: 'string',
          position: 1
        },
        {
          id: 358183,
          content_id: 261676,
          key: 'tag',
          value: 'track',
          type: 'string',
          position: 1
        },
        {
          id: 356396,
          content_id: 261676,
          key: 'show_in_new_feed',
          value: '1',
          type: 'boolean',
          position: 1
        },
        {
          id: 356397,
          content_id: 261676,
          key: 'title',
          value: 'Xeno Bounce',
          type: 'string',
          position: 1
        },
        {
          id: 356398,
          content_id: 261676,
          key: 'difficulty',
          value: '6',
          type: 'string',
          position: 1
        },
        {
          id: 356399,
          content_id: 261676,
          key: 'xp',
          value: '150',
          type: 'integer',
          position: 1
        },
        {
          id: 358176,
          content_id: 261676,
          key: 'style',
          value: 'Odd Time',
          type: 'string',
          position: 2
        },
        {
          id: 358179,
          content_id: 261676,
          key: 'topic',
          value: 'Odd Time',
          type: 'string',
          position: 2
        },
        {
          id: 358182,
          content_id: 261676,
          key: 'tag',
          value: 'jam',
          type: 'string',
          position: 2
        },
        {
          id: 358184,
          content_id: 261676,
          key: 'tag',
          value: 'tracks',
          type: 'string',
          position: 3
        },
        {
          id: 358186,
          content_id: 261676,
          key: 'tag',
          value: 'drumless',
          type: 'string',
          position: 4
        },
        {
          id: 358185,
          content_id: 261676,
          key: 'tag',
          value: 'drum less',
          type: 'string',
          position: 5
        },
        {
          id: 358174,
          content_id: 261676,
          key: 'video',
          value: {
            id: 263079,
            slug: 'vimeo-video-438947544',
            type: 'vimeo-video',
            sort: 0,
            status: 'published',
            language: 'en-US',
            brand: 'drumeo',
            total_xp: '150',
            published_on: '2020-07-16 16:01:06',
            created_on: '2020-07-16 16:01:06',
            archived_on: null,
            parent_id: null,
            child_id: null,
            fields: [
              {
                id: 358129,
                content_id: 263079,
                key: 'vimeo_video_id',
                value: '438947544',
                type: 'string',
                position: 1
              },
              {
                id: 358130,
                content_id: 263079,
                key: 'length_in_seconds',
                value: '199',
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
          id: 356400,
          content_id: 261676,
          key: 'instructor',
          value: {
            id: 31880,
            slug: 'jared-falk',
            type: 'instructor',
            sort: 0,
            status: 'published',
            language: 'en-US',
            brand: 'drumeo',
            total_xp: null,
            published_on: '2017-12-13 17:23:20',
            created_on: '2017-12-13 17:23:20',
            archived_on: null,
            parent_id: null,
            child_id: null,
            fields: [
              {
                id: 60886,
                content_id: 31880,
                key: 'name',
                value: 'Jared Falk',
                type: 'string',
                position: 1
              }
            ],
            data: [
              {
                id: 18672,
                content_id: 31880,
                key: 'head_shot_picture_url',
                value:
                  'https://d1923uyy6spedc.cloudfront.net/31880-avatar-1557351774.jpg',
                position: 1
              },
              {
                id: 18673,
                content_id: 31880,
                key: 'biography',
                value:
                  '<p>Jared Falk is a co-founder of Drumeo and author of the best-seller instructional programs &ldquo;Successful Drumming&rdquo; and &ldquo;Bass Drum Secrets&rdquo;. With over 15 years of experience teaching drummers from all over the world, Jared is known for his simplified teaching methods and high level of enthusiasm for the drumming community. He&rsquo;s a master of the heel-toe foot technique and a proficient rock/funk drummer, whose sole objective is making your experience behind a drum set, fulfilling and fun.</p>',
                position: 1
              }
            ],
            permissions: []
          },
          type: 'content',
          position: 1
        }
      ],
      data: [
        {
          id: 142230,
          content_id: 261676,
          key: 'thumbnail_url',
          value:
            'https://d1923uyy6spedc.cloudfront.net/261676-card-thumbnail-1594994038.png',
          position: 1
        },
        {
          id: 142231,
          content_id: 261676,
          key: 'original_thumbnail_url',
          value:
            'https://d1923uyy6spedc.cloudfront.net/261676-card-thumbnail-maxres-1594994033.png',
          position: 1
        },
        {
          id: 142234,
          content_id: 261676,
          key: 'description',
          value:
            '<p>"Xeno Bounce" is a cool odd-time play-along in a funk style.&nbsp;</p>',
          position: 1
        },
        {
          id: 142240,
          content_id: 261676,
          key: 'resource_name',
          value: 'MP3 With Click',
          position: 1
        },
        {
          id: 142241,
          content_id: 261676,
          key: 'resource_url',
          value:
            'https://s3.amazonaws.com/drumeo/play-along-resources/xeno-bounce/xeno-bounce-w-click.mp3',
          position: 1
        },
        {
          id: 142242,
          content_id: 261676,
          key: 'mp3_no_drums_yes_click_url',
          value:
            'https://s3.amazonaws.com/drumeo/play-along-resources/xeno-bounce/xeno-bounce-w-click.mp3',
          position: 1
        },
        {
          id: 142243,
          content_id: 261676,
          key: 'mp3_no_drums_no_click_url',
          value:
            'https://s3.amazonaws.com/drumeo/play-along-resources/xeno-bounce/xeno-bounce-no-click.mp3',
          position: 1
        },
        {
          id: 142246,
          content_id: 261676,
          key: 'mp3_yes_drums_no_click_url',
          value:
            'https://s3.amazonaws.com/drumeo/play-along-resources/xeno-bounce/xeno-bounce-no-click.mp3',
          position: 1
        },
        {
          id: 142247,
          content_id: 261676,
          key: 'mp3_yes_drums_yes_click_url',
          value:
            'https://s3.amazonaws.com/drumeo/play-along-resources/xeno-bounce/xeno-bounce-w-click.mp3',
          position: 1
        },
        {
          id: 142244,
          content_id: 261676,
          key: 'resource_name',
          value: 'MP3 Without Click',
          position: 2
        },
        {
          id: 142245,
          content_id: 261676,
          key: 'resource_url',
          value:
            'https://s3.amazonaws.com/drumeo/play-along-resources/xeno-bounce/xeno-bounce-no-click.mp3',
          position: 2
        },
        {
          id: 142251,
          content_id: 261676,
          key: 'resource_name',
          value: 'PDF Chart',
          position: 3
        },
        {
          id: 142252,
          content_id: 261676,
          key: 'resource_url',
          value:
            'https://s3.amazonaws.com/drumeo/play-along-resources/xeno-bounce/drumeo-pa316-xeno-bounce.pdf',
          position: 3
        }
      ],
      permissions: [
        {
          id: 1,
          content_id: null,
          content_type: 'play-along',
          permission_id: 1,
          brand: 'drumeo',
          name: 'Drumeo Edge'
        }
      ],
      user_progress: { 149628: [] },
      completed: false,
      started: false,
      progress_percent: 0,
      user_playlists: { 149628: [] },
      is_added_to_primary_playlist: false,
      published_on_in_timezone: {
        date: '2020-07-18 08:00:00.000000',
        timezone_type: 3,
        timezone: 'America/Los_Angeles'
      },
      is_new: false,
      url:
        'https://staging.drumeo.com/laravel/public/members/lessons/play-alongs/261676',
      xp: 150,
      xp_bonus: 150
    },
    {
      id: 262303,
      slug: 'seven-gateways-of-time',
      type: 'play-along',
      sort: 0,
      status: 'scheduled',
      language: 'en-US',
      brand: 'drumeo',
      total_xp: '150',
      published_on: '2020-07-10 15:00:00',
      created_on: '2020-07-06 21:23:09',
      archived_on: null,
      parent_id: null,
      child_id: null,
      fields: [
        {
          id: 357065,
          content_id: 262303,
          key: 'show_in_new_feed',
          value: '1',
          type: 'boolean',
          position: 1
        },
        {
          id: 357066,
          content_id: 262303,
          key: 'title',
          value: 'Seven Gateways Of Time',
          type: 'string',
          position: 1
        },
        {
          id: 357067,
          content_id: 262303,
          key: 'video',
          value: {
            id: 259591,
            slug: 'vimeo-video-427105323',
            type: 'vimeo-video',
            sort: 0,
            status: 'published',
            language: 'en-US',
            brand: 'drumeo',
            total_xp: '150',
            published_on: '2020-06-08 18:30:30',
            created_on: '2020-06-08 18:30:30',
            archived_on: null,
            parent_id: null,
            child_id: null,
            fields: [
              {
                id: 351978,
                content_id: 259591,
                key: 'vimeo_video_id',
                value: '427105323',
                type: 'string',
                position: 1
              },
              {
                id: 351979,
                content_id: 259591,
                key: 'length_in_seconds',
                value: '238',
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
        { key: 'difficulty', value: 'all', type: 'string', position: 1 }
      ],
      data: [],
      permissions: [
        {
          id: 1,
          content_id: null,
          content_type: 'play-along',
          permission_id: 1,
          brand: 'drumeo',
          name: 'Drumeo Edge'
        }
      ],
      user_progress: { 149628: [] },
      completed: false,
      started: false,
      progress_percent: 0,
      user_playlists: { 149628: [] },
      is_added_to_primary_playlist: false,
      published_on_in_timezone: {
        date: '2020-07-10 08:00:00.000000',
        timezone_type: 3,
        timezone: 'America/Los_Angeles'
      },
      is_new: false,
      url:
        'https://staging.drumeo.com/laravel/public/members/lessons/play-alongs/262303',
      xp: 150,
      xp_bonus: 150
    },
    {
      id: 260251,
      slug: 'nutville',
      type: 'play-along',
      sort: 0,
      status: 'published',
      language: 'en-US',
      brand: 'drumeo',
      total_xp: '175',
      published_on: '2020-06-19 15:00:00',
      created_on: '2020-06-16 11:27:39',
      archived_on: null,
      parent_id: null,
      child_id: null,
      fields: [
        {
          id: 352822,
          content_id: 260251,
          key: 'show_in_new_feed',
          value: '1',
          type: 'boolean',
          position: 1
        },
        {
          id: 352823,
          content_id: 260251,
          key: 'title',
          value: 'Nutville',
          type: 'string',
          position: 1
        },
        {
          id: 352825,
          content_id: 260251,
          key: 'style',
          value: 'jazz',
          type: 'string',
          position: 1
        },
        {
          id: 352826,
          content_id: 260251,
          key: 'artist',
          value: 'Buddy Rich Big Band',
          type: 'string',
          position: 1
        },
        {
          id: 352827,
          content_id: 260251,
          key: 'topic',
          value: 'jazz',
          type: 'string',
          position: 1
        },
        {
          id: 352829,
          content_id: 260251,
          key: 'tag',
          value: 'horace silver',
          type: 'string',
          position: 1
        },
        {
          id: 352834,
          content_id: 260251,
          key: 'bpm',
          value: '140',
          type: 'string',
          position: 1
        },
        {
          id: 352835,
          content_id: 260251,
          key: 'difficulty',
          value: '6',
          type: 'string',
          position: 1
        },
        {
          id: 352836,
          content_id: 260251,
          key: 'xp',
          value: '150',
          type: 'integer',
          position: 1
        },
        {
          id: 352831,
          content_id: 260251,
          key: 'tag',
          value: 'jam tracks',
          type: 'string',
          position: 2
        },
        {
          id: 352830,
          content_id: 260251,
          key: 'tag',
          value: 'jam track',
          type: 'string',
          position: 3
        },
        {
          id: 352833,
          content_id: 260251,
          key: 'tag',
          value: 'drum less',
          type: 'string',
          position: 4
        },
        {
          id: 352832,
          content_id: 260251,
          key: 'tag',
          value: 'drumless',
          type: 'string',
          position: 5
        },
        {
          id: 352824,
          content_id: 260251,
          key: 'video',
          value: {
            id: 260220,
            slug: 'vimeo-video-429410763',
            type: 'vimeo-video',
            sort: 0,
            status: 'published',
            language: 'en-US',
            brand: 'drumeo',
            total_xp: '150',
            published_on: '2020-06-15 21:30:26',
            created_on: '2020-06-15 21:30:26',
            archived_on: null,
            parent_id: null,
            child_id: null,
            fields: [
              {
                id: 352749,
                content_id: 260220,
                key: 'vimeo_video_id',
                value: '429410763',
                type: 'string',
                position: 1
              },
              {
                id: 352750,
                content_id: 260220,
                key: 'length_in_seconds',
                value: '173',
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
          id: 352828,
          content_id: 260251,
          key: 'instructor',
          value: {
            id: 230449,
            slug: 'gil-sharone',
            type: 'instructor',
            sort: 0,
            status: 'published',
            language: 'en-US',
            brand: 'drumeo',
            total_xp: null,
            published_on: '2019-08-02 13:21:05',
            created_on: '2019-08-02 13:21:06',
            archived_on: null,
            parent_id: null,
            child_id: null,
            fields: [
              {
                id: 291236,
                content_id: 230449,
                key: 'name',
                value: 'Gil Sharone',
                type: 'string',
                position: 1
              }
            ],
            data: [
              {
                id: 103729,
                content_id: 230449,
                key: 'head_shot_picture_url',
                value:
                  'https://d1923uyy6spedc.cloudfront.net/230449-avatar-1566823986.jpg',
                position: 1
              },
              {
                id: 103731,
                content_id: 230449,
                key: 'biography',
                value:
                  '<p>Gil Sharone is an all-round master drummer in numerous styles of music, who came to prominence as a member of The Dillinger Escape Plan, Puscifer, and Marilyn Manson. Over the years he has established himself a first-call drummer, having worked with musicians like Stolen Babies, Team Sleep, Slightly Stoopid, and Morgan Heritage, besides recording drums for film scores of movies and shows such as Deadpool 2, Guardians of The Galaxy 2, John Wick 1 and 2, The Punisher and Kingdom. Besides his very successful career as a musician, Gil has also authored the award-winning, educational DVD, <em>Wicked Beats</em>.</p>',
                position: 1
              }
            ],
            permissions: []
          },
          type: 'content',
          position: 1
        }
      ],
      data: [
        {
          id: 138886,
          content_id: 260251,
          key: 'original_thumbnail_url',
          value:
            'https://d1923uyy6spedc.cloudfront.net/260251-card-thumbnail-maxres-1593035682.png',
          position: 1
        },
        {
          id: 138887,
          content_id: 260251,
          key: 'thumbnail_url',
          value:
            'https://d1923uyy6spedc.cloudfront.net/260251-card-thumbnail-1593035689.png',
          position: 1
        },
        {
          id: 138888,
          content_id: 260251,
          key: 'description',
          value:
            '<p>"Nutville" is an incredible big-band track that you are going to get a huge kick out of playing along to.</p>',
          position: 1
        },
        {
          id: 138889,
          content_id: 260251,
          key: 'mp3_no_drums_no_click_url',
          value:
            'https://s3.amazonaws.com/drumeo/play-along-resources/nutville/nutville-drums-false-click-false.mp3',
          position: 1
        },
        {
          id: 138890,
          content_id: 260251,
          key: 'mp3_yes_drums_no_click_url',
          value:
            'https://s3.amazonaws.com/drumeo/play-along-resources/nutville/nutville-drums-true-click-false.mp3',
          position: 1
        },
        {
          id: 138891,
          content_id: 260251,
          key: 'mp3_no_drums_yes_click_url',
          value:
            'https://s3.amazonaws.com/drumeo/play-along-resources/nutville/nutville-drums-false-click-true.mp3',
          position: 1
        },
        {
          id: 138892,
          content_id: 260251,
          key: 'mp3_yes_drums_yes_click_url',
          value:
            'https://s3.amazonaws.com/drumeo/play-along-resources/nutville/nutville-drums-true-click-true.mp3',
          position: 1
        },
        {
          id: 138893,
          content_id: 260251,
          key: 'resource_name',
          value: 'MP3 Without Click',
          position: 1
        },
        {
          id: 138894,
          content_id: 260251,
          key: 'resource_url',
          value:
            'https://s3.amazonaws.com/drumeo/play-along-resources/nutville/nutville-drums-false-click-false.mp3',
          position: 1
        },
        {
          id: 138895,
          content_id: 260251,
          key: 'resource_name',
          value: 'PDF Chart',
          position: 2
        },
        {
          id: 138896,
          content_id: 260251,
          key: 'resource_url',
          value:
            'https://s3.amazonaws.com/drumeo/play-along-resources/nutville/drumeo-pa315-nutville.pdf',
          position: 2
        }
      ],
      permissions: [
        {
          id: 1,
          content_id: null,
          content_type: 'play-along',
          permission_id: 1,
          brand: 'drumeo',
          name: 'Drumeo Edge'
        }
      ],
      user_progress: { 149628: [] },
      completed: false,
      started: false,
      progress_percent: 0,
      user_playlists: { 149628: [] },
      is_added_to_primary_playlist: false,
      published_on_in_timezone: {
        date: '2020-06-19 08:00:00.000000',
        timezone_type: 3,
        timezone: 'America/Los_Angeles'
      },
      is_new: false,
      url:
        'https://staging.drumeo.com/laravel/public/members/lessons/play-alongs/260251',
      xp: 150,
      xp_bonus: 150
    },
    {
      id: 254192,
      slug: 'black-cow',
      type: 'play-along',
      sort: 0,
      status: 'published',
      language: 'en-US',
      brand: 'drumeo',
      total_xp: '125',
      published_on: '2020-05-29 15:00:00',
      created_on: '2020-04-28 14:56:32',
      archived_on: null,
      parent_id: null,
      child_id: null,
      fields: [
        {
          id: 343808,
          content_id: 254192,
          key: 'difficulty',
          value: '1',
          type: 'string',
          position: 1
        },
        {
          id: 343809,
          content_id: 254192,
          key: 'xp',
          value: '100',
          type: 'integer',
          position: 1
        },
        {
          id: 350253,
          content_id: 254192,
          key: 'bpm',
          value: '93',
          type: 'string',
          position: 1
        },
        {
          id: 348207,
          content_id: 254192,
          key: 'style',
          value: 'Funk',
          type: 'string',
          position: 1
        },
        {
          id: 348209,
          content_id: 254192,
          key: 'topic',
          value: 'Funk',
          type: 'string',
          position: 1
        },
        {
          id: 348211,
          content_id: 254192,
          key: 'artist',
          value: 'Steely Dan',
          type: 'string',
          position: 1
        },
        {
          id: 348214,
          content_id: 254192,
          key: 'tag',
          value: 'aja',
          type: 'string',
          position: 1
        },
        {
          id: 343806,
          content_id: 254192,
          key: 'show_in_new_feed',
          value: '1',
          type: 'boolean',
          position: 1
        },
        {
          id: 343807,
          content_id: 254192,
          key: 'title',
          value: 'Black Cow',
          type: 'string',
          position: 1
        },
        {
          id: 348216,
          content_id: 254192,
          key: 'tag',
          value: 'jam tracks',
          type: 'string',
          position: 2
        },
        {
          id: 348215,
          content_id: 254192,
          key: 'tag',
          value: 'jam track',
          type: 'string',
          position: 3
        },
        {
          id: 348218,
          content_id: 254192,
          key: 'tag',
          value: 'drumless',
          type: 'string',
          position: 4
        },
        {
          id: 348217,
          content_id: 254192,
          key: 'tag',
          value: 'drum less',
          type: 'string',
          position: 5
        },
        {
          id: 343810,
          content_id: 254192,
          key: 'instructor',
          value: {
            id: 224273,
            slug: 'keith-carlock',
            type: 'instructor',
            sort: 0,
            status: 'published',
            language: 'en-US',
            brand: 'drumeo',
            total_xp: null,
            published_on: '2019-04-29 10:33:41',
            created_on: '2019-04-29 10:33:45',
            archived_on: null,
            parent_id: null,
            child_id: null,
            fields: [
              {
                id: 273012,
                content_id: 224273,
                key: 'name',
                value: 'Keith Carlock',
                type: 'string',
                position: 1
              }
            ],
            data: [
              {
                id: 94857,
                content_id: 224273,
                key: 'biography',
                value:
                  '<p>Keith Carlock is a professional drummer and famed author of the critically acclaimed DVD "The Big Picture: Phrasing, Improvisation, Style, &amp; Technique". Keith has recorded and toured with the who\'s who of the music industry. This includes musicians like John Mayer, Sting, Steely Dan, James Taylor, TOTO, Christopher Cross, Donald Fagen, Walter Becker, Diana Ross, Faith Hill, The Blues Brothers Band, Mike Stern, Leni Stern, David Johansen and the Harry Smiths, Richard Bona, Chris Botti, Wayne Krantz, Rudder, Harry Belafonte, Oz Noy, Larry Carlton, Clay Aiken, Rascal Flatts, Paula Abdul and Grover Washington Jr. Besides his extensive and impressive resume as a professional musician, Keith has also been voted number 1 Pop drummer, number 1 Fusion drummer, and number 1 Best All-Around drummer through Modern Drummer’s Readers Poll.</p>',
                position: 1
              },
              {
                id: 94858,
                content_id: 224273,
                key: 'head_shot_picture_url',
                value:
                  'https://d1923uyy6spedc.cloudfront.net/224273-avatar-1558125074.jpg',
                position: 1
              }
            ],
            permissions: []
          },
          type: 'content',
          position: 1
        },
        {
          id: 348206,
          content_id: 254192,
          key: 'video',
          value: {
            id: 255064,
            slug: 'vimeo-video-414862928',
            type: 'vimeo-video',
            sort: 0,
            status: 'published',
            language: 'en-US',
            brand: 'drumeo',
            total_xp: '150',
            published_on: '2020-05-04 19:00:51',
            created_on: '2020-05-04 19:00:51',
            archived_on: null,
            parent_id: null,
            child_id: null,
            fields: [
              {
                id: 344595,
                content_id: 255064,
                key: 'vimeo_video_id',
                value: '414862928',
                type: 'string',
                position: 1
              },
              {
                id: 344596,
                content_id: 255064,
                key: 'length_in_seconds',
                value: '294',
                type: 'integer',
                position: 1
              }
            ],
            data: [],
            permissions: []
          },
          type: 'content',
          position: 1
        }
      ],
      data: [
        {
          id: 136463,
          content_id: 254192,
          key: 'mp3_no_drums_no_click_url',
          value:
            'https://s3.amazonaws.com/drumeo/play-along-resources/black-cow/black-cow-drums-false-click-false.mp3',
          position: 1
        },
        {
          id: 136465,
          content_id: 254192,
          key: 'mp3_yes_drums_yes_click_url',
          value:
            'https://s3.amazonaws.com/drumeo/play-along-resources/black-cow/black-cow-drums-true-click-true.mp3',
          position: 1
        },
        {
          id: 136466,
          content_id: 254192,
          key: 'mp3_yes_drums_no_click_url',
          value:
            'https://s3.amazonaws.com/drumeo/play-along-resources/black-cow/black-cow-drums-true-click-false.mp3',
          position: 1
        },
        {
          id: 136467,
          content_id: 254192,
          key: 'mp3_no_drums_yes_click_url',
          value:
            'https://s3.amazonaws.com/drumeo/play-along-resources/black-cow/black-cow-drums-false-click-true.mp3',
          position: 1
        },
        {
          id: 136468,
          content_id: 254192,
          key: 'resource_name',
          value: 'MP3 Without Click',
          position: 1
        },
        {
          id: 136469,
          content_id: 254192,
          key: 'resource_url',
          value:
            'https://s3.amazonaws.com/drumeo/play-along-resources/black-cow/black-cow-drums-false-click-false.mp3',
          position: 1
        },
        {
          id: 136007,
          content_id: 254192,
          key: 'thumbnail_url',
          value:
            'https://d1923uyy6spedc.cloudfront.net/254192-card-thumbnail-1593035708.png',
          position: 1
        },
        {
          id: 136008,
          content_id: 254192,
          key: 'original_thumbnail_url',
          value:
            'https://d1923uyy6spedc.cloudfront.net/254192-card-thumbnail-maxres-1593035705.png',
          position: 1
        },
        {
          id: 136009,
          content_id: 254192,
          key: 'description',
          value:
            "<p>If you're a fan of Steely Dan or soul music, this is a great track for practicing some funky grooves while playing along \ta very popular song.</p>",
          position: 1
        },
        {
          id: 136470,
          content_id: 254192,
          key: 'resource_name',
          value: 'MP3 With Click',
          position: 2
        },
        {
          id: 136471,
          content_id: 254192,
          key: 'resource_url',
          value:
            'https://s3.amazonaws.com/drumeo/play-along-resources/black-cow/black-cow-drums-false-click-true.mp3',
          position: 2
        },
        {
          id: 136472,
          content_id: 254192,
          key: 'resource_name',
          value: 'PDF Chart',
          position: 3
        },
        {
          id: 136473,
          content_id: 254192,
          key: 'resource_url',
          value:
            'https://s3.amazonaws.com/drumeo/play-along-resources/black-cow/drumeo-pa314-black-cow.pdf',
          position: 3
        }
      ],
      permissions: [
        {
          id: 1,
          content_id: null,
          content_type: 'play-along',
          permission_id: 1,
          brand: 'drumeo',
          name: 'Drumeo Edge'
        }
      ],
      user_progress: { 149628: [] },
      completed: false,
      started: false,
      progress_percent: 0,
      user_playlists: { 149628: [] },
      is_added_to_primary_playlist: false,
      published_on_in_timezone: {
        date: '2020-05-29 08:00:00.000000',
        timezone_type: 3,
        timezone: 'America/Los_Angeles'
      },
      is_new: false,
      url:
        'https://staging.drumeo.com/laravel/public/members/lessons/play-alongs/254192',
      xp: 100,
      xp_bonus: 100
    },
    {
      id: 254179,
      slug: 'speak-to-me',
      type: 'play-along',
      sort: 0,
      status: 'published',
      language: 'en-US',
      brand: 'drumeo',
      total_xp: '175',
      published_on: '2020-05-22 15:00:00',
      created_on: '2020-04-28 14:28:15',
      archived_on: null,
      parent_id: null,
      child_id: null,
      fields: [
        {
          id: 347400,
          content_id: 254179,
          key: 'tag',
          value: 'jam tracks',
          type: 'string',
          position: 1
        },
        {
          id: 347407,
          content_id: 254179,
          key: 'style',
          value: 'Alternative',
          type: 'string',
          position: 1
        },
        {
          id: 347408,
          content_id: 254179,
          key: 'topic',
          value: 'Alternative',
          type: 'string',
          position: 1
        },
        {
          id: 347409,
          content_id: 254179,
          key: 'artist',
          value: 'Rashid Williams',
          type: 'string',
          position: 1
        },
        {
          id: 347410,
          content_id: 254179,
          key: 'bpm',
          value: '180',
          type: 'string',
          position: 1
        },
        {
          id: 343740,
          content_id: 254179,
          key: 'show_in_new_feed',
          value: '1',
          type: 'boolean',
          position: 1
        },
        {
          id: 343741,
          content_id: 254179,
          key: 'title',
          value: 'Speak To Me',
          type: 'string',
          position: 1
        },
        {
          id: 343742,
          content_id: 254179,
          key: 'difficulty',
          value: '4',
          type: 'string',
          position: 1
        },
        {
          id: 343743,
          content_id: 254179,
          key: 'xp',
          value: '150',
          type: 'integer',
          position: 1
        },
        {
          id: 347399,
          content_id: 254179,
          key: 'tag',
          value: 'jam track',
          type: 'string',
          position: 2
        },
        {
          id: 347401,
          content_id: 254179,
          key: 'tag',
          value: 'drumless',
          type: 'string',
          position: 3
        },
        {
          id: 347403,
          content_id: 254179,
          key: 'tag',
          value: 'play along',
          type: 'string',
          position: 4
        },
        {
          id: 347402,
          content_id: 254179,
          key: 'tag',
          value: 'play-along',
          type: 'string',
          position: 5
        },
        {
          id: 343744,
          content_id: 254179,
          key: 'instructor',
          value: {
            id: 225962,
            slug: 'rashid-williams',
            type: 'instructor',
            sort: 0,
            status: 'published',
            language: 'en-US',
            brand: 'drumeo',
            total_xp: null,
            published_on: '2019-05-29 10:46:11',
            created_on: '2019-05-29 10:46:13',
            archived_on: null,
            parent_id: null,
            child_id: null,
            fields: [
              {
                id: 278291,
                content_id: 225962,
                key: 'name',
                value: 'Rashid Williams',
                type: 'string',
                position: 1
              }
            ],
            data: [
              {
                id: 96022,
                content_id: 225962,
                key: 'head_shot_picture_url',
                value:
                  'https://d1923uyy6spedc.cloudfront.net/225962-avatar-1559133531.jpg',
                position: 1
              },
              {
                id: 96023,
                content_id: 225962,
                key: 'biography',
                value:
                  '<p>Rashid Williams is groove, is chops, is timing, and he is music. As a self-taught drummer with an incredibly complete toolbox of drumming and musical facility, Rashid has climbed the ladder of success over the years, to find himself at the top as the drummer and musical director for some of the biggest acts of our time, including John Legend, Jill Scott, Alicia Keys, N.E.R.D, Diddy’s Dirty Money, Eric Roberson, Goapele, and J. Cole.</p>',
                position: 1
              }
            ],
            permissions: []
          },
          type: 'content',
          position: 1
        },
        {
          id: 347590,
          content_id: 254179,
          key: 'video',
          value: {
            id: 255613,
            slug: 'vimeo-video-416499328',
            type: 'vimeo-video',
            sort: 0,
            status: 'published',
            language: 'en-US',
            brand: 'drumeo',
            total_xp: '150',
            published_on: '2020-05-08 22:00:50',
            created_on: '2020-05-08 22:00:50',
            archived_on: null,
            parent_id: null,
            child_id: null,
            fields: [
              {
                id: 345306,
                content_id: 255613,
                key: 'vimeo_video_id',
                value: '416499328',
                type: 'string',
                position: 1
              },
              {
                id: 345307,
                content_id: 255613,
                key: 'length_in_seconds',
                value: '249',
                type: 'integer',
                position: 1
              }
            ],
            data: [],
            permissions: []
          },
          type: 'content',
          position: 1
        }
      ],
      data: [
        {
          id: 135229,
          content_id: 254179,
          key: 'thumbnail_url',
          value:
            'https://d1923uyy6spedc.cloudfront.net/254179-card-thumbnail-1593035722.png',
          position: 1
        },
        {
          id: 135230,
          content_id: 254179,
          key: 'original_thumbnail_url',
          value:
            'https://d1923uyy6spedc.cloudfront.net/254179-card-thumbnail-maxres-1593035719.png',
          position: 1
        },
        {
          id: 135232,
          content_id: 254179,
          key: 'description',
          value:
            "<p>If you'd like to work on alternative drumming, this is a very good track for that and put together by the great Rashid Williams himself.</p>",
          position: 1
        },
        {
          id: 134566,
          content_id: 254179,
          key: 'mp3_no_drums_no_click_url',
          value:
            'https://d1923uyy6spedc.cloudfront.net/254179-mp3-no-drums-no-click-1590087383.mp3',
          position: 1
        },
        {
          id: 134567,
          content_id: 254179,
          key: 'mp3_yes_drums_no_click_url',
          value:
            'https://d1923uyy6spedc.cloudfront.net/254179-mp3-yes-drums-no-click-1590087391.mp3',
          position: 1
        },
        {
          id: 134568,
          content_id: 254179,
          key: 'mp3_no_drums_yes_click_url',
          value:
            'https://d1923uyy6spedc.cloudfront.net/254179-mp3-no-drums-yes-click-1590087398.mp3',
          position: 1
        },
        {
          id: 134570,
          content_id: 254179,
          key: 'mp3_yes_drums_yes_click_url',
          value:
            'https://d1923uyy6spedc.cloudfront.net/254179-mp3-yes-drums-yes-click-1590087403.mp3',
          position: 1
        },
        {
          id: 134575,
          content_id: 254179,
          key: 'resource_name',
          value: 'PDF Chart',
          position: 1
        },
        {
          id: 134576,
          content_id: 254179,
          key: 'resource_url',
          value:
            'https://d1923uyy6spedc.cloudfront.net/254179-resource-1590087953.pdf',
          position: 1
        },
        {
          id: 135225,
          content_id: 254179,
          key: 'resource_name',
          value: 'MP3 Without Click',
          position: 2
        },
        {
          id: 135226,
          content_id: 254179,
          key: 'resource_url',
          value:
            'https://d1923uyy6spedc.cloudfront.net/254179-mp3-no-drums-no-click-1590087383.mp3',
          position: 2
        },
        {
          id: 135227,
          content_id: 254179,
          key: 'resource_name',
          value: 'MP3 With Click',
          position: 3
        },
        {
          id: 135228,
          content_id: 254179,
          key: 'resource_url',
          value:
            'https://d1923uyy6spedc.cloudfront.net/254179-mp3-no-drums-yes-click-1590087398.mp3',
          position: 3
        }
      ],
      permissions: [
        {
          id: 1,
          content_id: null,
          content_type: 'play-along',
          permission_id: 1,
          brand: 'drumeo',
          name: 'Drumeo Edge'
        }
      ],
      user_progress: {
        149628: {
          id: 9285203,
          content_id: 254179,
          user_id: 149628,
          state: 'started',
          progress_percent: 0,
          higher_key_progress: null,
          updated_on: '2020-07-31 08:27:46'
        }
      },
      completed: false,
      started: true,
      progress_percent: 0,
      user_playlists: { 149628: [] },
      is_added_to_primary_playlist: false,
      published_on_in_timezone: {
        date: '2020-05-22 08:00:00.000000',
        timezone_type: 3,
        timezone: 'America/Los_Angeles'
      },
      is_new: false,
      url:
        'https://staging.drumeo.com/laravel/public/members/lessons/play-alongs/254179',
      xp: 150,
      xp_bonus: 150
    },
    {
      id: 254163,
      slug: 'blue-jacket',
      type: 'play-along',
      sort: 0,
      status: 'published',
      language: 'en-US',
      brand: 'drumeo',
      total_xp: '175',
      published_on: '2020-05-15 15:00:00',
      created_on: '2020-04-28 13:46:13',
      archived_on: null,
      parent_id: null,
      child_id: null,
      fields: [
        {
          id: 345403,
          content_id: 254163,
          key: 'artist',
          value: 'Mathieu Fiset & The RoboJazz Band',
          type: 'string',
          position: 1
        },
        {
          id: 345404,
          content_id: 254163,
          key: 'style',
          value: 'Vocals',
          type: 'string',
          position: 1
        },
        {
          id: 345405,
          content_id: 254163,
          key: 'topic',
          value: 'Vocals',
          type: 'string',
          position: 1
        },
        {
          id: 345407,
          content_id: 254163,
          key: 'tag',
          value: 'jam tracks',
          type: 'string',
          position: 1
        },
        {
          id: 343667,
          content_id: 254163,
          key: 'show_in_new_feed',
          value: '1',
          type: 'boolean',
          position: 1
        },
        {
          id: 343668,
          content_id: 254163,
          key: 'title',
          value: 'Blue Jacket',
          type: 'string',
          position: 1
        },
        {
          id: 343669,
          content_id: 254163,
          key: 'difficulty',
          value: '4',
          type: 'string',
          position: 1
        },
        {
          id: 343670,
          content_id: 254163,
          key: 'xp',
          value: '150',
          type: 'integer',
          position: 1
        },
        {
          id: 347589,
          content_id: 254163,
          key: 'bpm',
          value: '122',
          type: 'string',
          position: 1
        },
        {
          id: 345603,
          content_id: 254163,
          key: 'style',
          value: 'Alternative',
          type: 'string',
          position: 2
        },
        {
          id: 345604,
          content_id: 254163,
          key: 'topic',
          value: 'Alternative',
          type: 'string',
          position: 2
        },
        {
          id: 345406,
          content_id: 254163,
          key: 'tag',
          value: 'jam track',
          type: 'string',
          position: 2
        },
        {
          id: 345409,
          content_id: 254163,
          key: 'tag',
          value: 'drum less',
          type: 'string',
          position: 3
        },
        {
          id: 345408,
          content_id: 254163,
          key: 'tag',
          value: 'drumless',
          type: 'string',
          position: 4
        },
        {
          id: 345399,
          content_id: 254163,
          key: 'video',
          value: {
            id: 255052,
            slug: 'vimeo-video-414831249',
            type: 'vimeo-video',
            sort: 0,
            status: 'published',
            language: 'en-US',
            brand: 'drumeo',
            total_xp: '150',
            published_on: '2020-05-04 17:30:25',
            created_on: '2020-05-04 17:30:25',
            archived_on: null,
            parent_id: null,
            child_id: null,
            fields: [
              {
                id: 344589,
                content_id: 255052,
                key: 'vimeo_video_id',
                value: '414831249',
                type: 'string',
                position: 1
              },
              {
                id: 344590,
                content_id: 255052,
                key: 'length_in_seconds',
                value: '247',
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
          id: 343671,
          content_id: 254163,
          key: 'instructor',
          value: {
            id: 239928,
            slug: 'stephane-chamberland',
            type: 'instructor',
            sort: 0,
            status: 'published',
            language: 'en-US',
            brand: 'drumeo',
            total_xp: '150',
            published_on: '2019-12-02 11:59:15',
            created_on: '2019-12-02 11:59:15',
            archived_on: null,
            parent_id: null,
            child_id: null,
            fields: [
              {
                id: 318148,
                content_id: 239928,
                key: 'name',
                value: 'Stephane Chamberland',
                type: 'string',
                position: 1
              }
            ],
            data: [
              {
                id: 116911,
                content_id: 239928,
                key: 'biography',
                value:
                  '<p>Stephane Chamberland is an incredible drummer with an impressive resume, having studied at the Manhattan School of Music and the Conservatory of Music in Quebec City, and also under the guiding hands and feet of Dom Famularo, Jim Chapin, Robby Ameen, Jeff Salem, and Paul DeLong, just to name a few. As a musician, Stephane has played with an onslaught of artists, including Colin Hunter, Jordane Labrie, The Christian Pare World Ensemble, Kabir Kouba Band, and Roxane de Lafontaine. As an instructor, he has taught all over the world through international festivals and camps, besides being very active as a Skype and in-person instructor. All these expertise combined, have led him to become an increasingly bigger voice in the world of publishing, co-authoring the books <em>The Weaker Side</em>, <em>Drumset Duets</em>, and <em>Pedal Control</em>, and as a contributing writer for <em>Modern Drummer</em> magazine, <em>Canadian Musician</em> and <em>Percussive Notes</em>.</p>',
                position: 1
              },
              {
                id: 116912,
                content_id: 239928,
                key: 'head_shot_picture_url',
                value:
                  'https://d1923uyy6spedc.cloudfront.net/239928-avatar-1575288472.jpg',
                position: 1
              }
            ],
            permissions: []
          },
          type: 'content',
          position: 1
        }
      ],
      data: [
        {
          id: 133218,
          content_id: 254163,
          key: 'mp3_no_drums_no_click_url',
          value:
            'https://s3.amazonaws.com/drumeo/play-along-resources/blue-jacket/blue-jacket-no-click-no-drums.mp3',
          position: 1
        },
        {
          id: 133219,
          content_id: 254163,
          key: 'mp3_yes_drums_no_click_url',
          value:
            'https://s3.amazonaws.com/drumeo/play-along-resources/blue-jacket/blue-jacket-no-click-with-drums.mp3',
          position: 1
        },
        {
          id: 133220,
          content_id: 254163,
          key: 'mp3_no_drums_yes_click_url',
          value:
            'https://s3.amazonaws.com/drumeo/play-along-resources/blue-jacket/blue-jacket-with-click-no-drums.mp3',
          position: 1
        },
        {
          id: 133221,
          content_id: 254163,
          key: 'mp3_yes_drums_yes_click_url',
          value:
            'https://s3.amazonaws.com/drumeo/play-along-resources/blue-jacket/blue-jacket-with-click-with-drums.mp3',
          position: 1
        },
        {
          id: 133222,
          content_id: 254163,
          key: 'resource_name',
          value: 'MP3 Without Click',
          position: 1
        },
        {
          id: 133223,
          content_id: 254163,
          key: 'resource_url',
          value:
            'https://s3.amazonaws.com/drumeo/play-along-resources/blue-jacket/blue-jacket-no-click-no-drums.mp3',
          position: 1
        },
        {
          id: 133063,
          content_id: 254163,
          key: 'thumbnail_url',
          value:
            'https://d1923uyy6spedc.cloudfront.net/254163-card-thumbnail-1593035733.png',
          position: 1
        },
        {
          id: 133064,
          content_id: 254163,
          key: 'original_thumbnail_url',
          value:
            'https://d1923uyy6spedc.cloudfront.net/254163-card-thumbnail-maxres-1593035729.png',
          position: 1
        },
        {
          id: 133066,
          content_id: 254163,
          key: 'description',
          value:
            "<p>If you'd like to work on progressive drumming, this is a very good track for that and put together by the great musical minds of Mathieu Fiset &amp; The RoboJazz Band.</p>",
          position: 1
        },
        {
          id: 133224,
          content_id: 254163,
          key: 'resource_name',
          value: 'MP3 With Click',
          position: 2
        },
        {
          id: 133225,
          content_id: 254163,
          key: 'resource_url',
          value:
            'https://s3.amazonaws.com/drumeo/play-along-resources/blue-jacket/blue-jacket-with-click-no-drums.mp3',
          position: 2
        },
        {
          id: 133226,
          content_id: 254163,
          key: 'resource_name',
          value: 'PDF Chart',
          position: 3
        },
        {
          id: 133227,
          content_id: 254163,
          key: 'resource_url',
          value:
            'https://s3.amazonaws.com/drumeo/play-along-resources/blue-jacket/drumeo-pa312-blue-jacket.pdf',
          position: 3
        }
      ],
      permissions: [
        {
          id: 1,
          content_id: null,
          content_type: 'play-along',
          permission_id: 1,
          brand: 'drumeo',
          name: 'Drumeo Edge'
        }
      ],
      user_progress: { 149628: [] },
      completed: false,
      started: false,
      progress_percent: 0,
      user_playlists: { 149628: [] },
      is_added_to_primary_playlist: false,
      published_on_in_timezone: {
        date: '2020-05-15 08:00:00.000000',
        timezone_type: 3,
        timezone: 'America/Los_Angeles'
      },
      is_new: false,
      url:
        'https://staging.drumeo.com/laravel/public/members/lessons/play-alongs/254163',
      xp: 150,
      xp_bonus: 150
    },
    {
      id: 253432,
      slug: 'get-the-groove-right',
      type: 'play-along',
      sort: 0,
      status: 'published',
      language: 'en-US',
      brand: 'drumeo',
      total_xp: '175',
      published_on: '2020-05-08 15:00:00',
      created_on: '2020-04-22 15:03:47',
      archived_on: null,
      parent_id: null,
      child_id: null,
      fields: [
        {
          id: 344605,
          content_id: 253432,
          key: 'bpm',
          value: '118',
          type: 'string',
          position: 1
        },
        {
          id: 344606,
          content_id: 253432,
          key: 'style',
          value: 'Funk',
          type: 'string',
          position: 1
        },
        {
          id: 344608,
          content_id: 253432,
          key: 'topic',
          value: 'Funk',
          type: 'string',
          position: 1
        },
        {
          id: 344611,
          content_id: 253432,
          key: 'tag',
          value: 'jam tracks',
          type: 'string',
          position: 1
        },
        {
          id: 342702,
          content_id: 253432,
          key: 'show_in_new_feed',
          value: '1',
          type: 'boolean',
          position: 1
        },
        {
          id: 342703,
          content_id: 253432,
          key: 'title',
          value: 'Get The Groove Right',
          type: 'string',
          position: 1
        },
        {
          id: 342704,
          content_id: 253432,
          key: 'difficulty',
          value: '5',
          type: 'string',
          position: 1
        },
        {
          id: 342705,
          content_id: 253432,
          key: 'xp',
          value: '150',
          type: 'integer',
          position: 1
        },
        {
          id: 342706,
          content_id: 253432,
          key: 'artist',
          value: 'Mathieu Fiset & The RoboJazz Band',
          type: 'string',
          position: 1
        },
        {
          id: 344607,
          content_id: 253432,
          key: 'style',
          value: 'Vocals',
          type: 'string',
          position: 2
        },
        {
          id: 344609,
          content_id: 253432,
          key: 'topic',
          value: 'Vocals',
          type: 'string',
          position: 2
        },
        {
          id: 344610,
          content_id: 253432,
          key: 'tag',
          value: 'jam track',
          type: 'string',
          position: 2
        },
        {
          id: 344612,
          content_id: 253432,
          key: 'tag',
          value: 'drumless',
          type: 'string',
          position: 3
        },
        {
          id: 344613,
          content_id: 253432,
          key: 'tag',
          value: 'drum less',
          type: 'string',
          position: 4
        },
        {
          id: 344604,
          content_id: 253432,
          key: 'video',
          value: {
            id: 253354,
            slug: 'vimeo-video-410377242',
            type: 'vimeo-video',
            sort: 0,
            status: 'published',
            language: 'en-US',
            brand: 'drumeo',
            total_xp: '150',
            published_on: '2020-04-21 22:00:37',
            created_on: '2020-04-21 22:00:37',
            archived_on: null,
            parent_id: null,
            child_id: null,
            fields: [
              {
                id: 342530,
                content_id: 253354,
                key: 'vimeo_video_id',
                value: '410377242',
                type: 'string',
                position: 1
              },
              {
                id: 342531,
                content_id: 253354,
                key: 'length_in_seconds',
                value: '203',
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
          id: 342707,
          content_id: 253432,
          key: 'instructor',
          value: {
            id: 239928,
            slug: 'stephane-chamberland',
            type: 'instructor',
            sort: 0,
            status: 'published',
            language: 'en-US',
            brand: 'drumeo',
            total_xp: '150',
            published_on: '2019-12-02 11:59:15',
            created_on: '2019-12-02 11:59:15',
            archived_on: null,
            parent_id: null,
            child_id: null,
            fields: [
              {
                id: 318148,
                content_id: 239928,
                key: 'name',
                value: 'Stephane Chamberland',
                type: 'string',
                position: 1
              }
            ],
            data: [
              {
                id: 116911,
                content_id: 239928,
                key: 'biography',
                value:
                  '<p>Stephane Chamberland is an incredible drummer with an impressive resume, having studied at the Manhattan School of Music and the Conservatory of Music in Quebec City, and also under the guiding hands and feet of Dom Famularo, Jim Chapin, Robby Ameen, Jeff Salem, and Paul DeLong, just to name a few. As a musician, Stephane has played with an onslaught of artists, including Colin Hunter, Jordane Labrie, The Christian Pare World Ensemble, Kabir Kouba Band, and Roxane de Lafontaine. As an instructor, he has taught all over the world through international festivals and camps, besides being very active as a Skype and in-person instructor. All these expertise combined, have led him to become an increasingly bigger voice in the world of publishing, co-authoring the books <em>The Weaker Side</em>, <em>Drumset Duets</em>, and <em>Pedal Control</em>, and as a contributing writer for <em>Modern Drummer</em> magazine, <em>Canadian Musician</em> and <em>Percussive Notes</em>.</p>',
                position: 1
              },
              {
                id: 116912,
                content_id: 239928,
                key: 'head_shot_picture_url',
                value:
                  'https://d1923uyy6spedc.cloudfront.net/239928-avatar-1575288472.jpg',
                position: 1
              }
            ],
            permissions: []
          },
          type: 'content',
          position: 1
        }
      ],
      data: [
        {
          id: 132647,
          content_id: 253432,
          key: 'mp3_no_drums_no_click_url',
          value:
            'https://s3.amazonaws.com/drumeo/play-along-resources/get-the-groove-right/get-the-groove-right-no-click-no-drums.mp3',
          position: 1
        },
        {
          id: 132648,
          content_id: 253432,
          key: 'mp3_yes_drums_no_click_url',
          value:
            'https://s3.amazonaws.com/drumeo/play-along-resources/get-the-groove-right/get-the-groove-right-no-click-with-drums.mp3',
          position: 1
        },
        {
          id: 132649,
          content_id: 253432,
          key: 'mp3_no_drums_yes_click_url',
          value:
            'https://s3.amazonaws.com/drumeo/play-along-resources/get-the-groove-right/get-the-groove-right-with-click-no-drums.mp3',
          position: 1
        },
        {
          id: 132650,
          content_id: 253432,
          key: 'mp3_yes_drums_yes_click_url',
          value:
            'https://s3.amazonaws.com/drumeo/play-along-resources/get-the-groove-right/get-the-groove-right-with-click-with-drums.mp3',
          position: 1
        },
        {
          id: 132651,
          content_id: 253432,
          key: 'resource_name',
          value: 'MP3 Without Click',
          position: 1
        },
        {
          id: 132652,
          content_id: 253432,
          key: 'resource_url',
          value:
            'https://s3.amazonaws.com/drumeo/play-along-resources/get-the-groove-right/get-the-groove-right-no-click-no-drums.mp3',
          position: 1
        },
        {
          id: 132498,
          content_id: 253432,
          key: 'description',
          value:
            "<p>If you'd like to work on funk drumming, this is a very good track for that. It's a mid-tempo funk play-along put together by the great musical minds of Mathieu Fiset &amp; The RoboJazz Band.</p>",
          position: 1
        },
        {
          id: 132499,
          content_id: 253432,
          key: 'thumbnail_url',
          value:
            'https://d1923uyy6spedc.cloudfront.net/253432-card-thumbnail-1593035744.png',
          position: 1
        },
        {
          id: 132500,
          content_id: 253432,
          key: 'original_thumbnail_url',
          value:
            'https://d1923uyy6spedc.cloudfront.net/253432-card-thumbnail-maxres-1593035739.png',
          position: 1
        },
        {
          id: 132653,
          content_id: 253432,
          key: 'resource_name',
          value: 'MP3 With Click',
          position: 2
        },
        {
          id: 132654,
          content_id: 253432,
          key: 'resource_url',
          value:
            'https://s3.amazonaws.com/drumeo/play-along-resources/get-the-groove-right/get-the-groove-right-with-click-no-drums.mp3',
          position: 2
        },
        {
          id: 132657,
          content_id: 253432,
          key: 'resource_name',
          value: 'PDF Chart',
          position: 3
        },
        {
          id: 132658,
          content_id: 253432,
          key: 'resource_url',
          value:
            'https://s3.amazonaws.com/drumeo/play-along-resources/get-the-groove-right/drumeo-pa311-get-the-groove-right-1.pdf',
          position: 3
        }
      ],
      permissions: [
        {
          id: 1,
          content_id: null,
          content_type: 'play-along',
          permission_id: 1,
          brand: 'drumeo',
          name: 'Drumeo Edge'
        }
      ],
      user_progress: { 149628: [] },
      completed: false,
      started: false,
      progress_percent: 0,
      user_playlists: { 149628: [] },
      is_added_to_primary_playlist: false,
      published_on_in_timezone: {
        date: '2020-05-08 08:00:00.000000',
        timezone_type: 3,
        timezone: 'America/Los_Angeles'
      },
      is_new: false,
      url:
        'https://staging.drumeo.com/laravel/public/members/lessons/play-alongs/253432',
      xp: 150,
      xp_bonus: 150
    },
    {
      id: 248523,
      slug: 'cha-cha-2',
      type: 'play-along',
      sort: 0,
      status: 'published',
      language: 'en-US',
      brand: 'drumeo',
      total_xp: '175',
      published_on: '2020-04-17 15:00:00',
      created_on: '2020-03-23 15:05:37',
      archived_on: null,
      parent_id: null,
      child_id: null,
      fields: [
        {
          id: 341793,
          content_id: 248523,
          key: 'bpm',
          value: '127',
          type: 'string',
          position: 1
        },
        {
          id: 342077,
          content_id: 248523,
          key: 'show_in_new_feed',
          value: '1',
          type: 'integer',
          position: 1
        },
        {
          id: 341345,
          content_id: 248523,
          key: 'artist',
          value: 'Jody Fisher, Baba Elefante, Tilden Webb & Mike Michalkow',
          type: 'string',
          position: 1
        },
        {
          id: 341346,
          content_id: 248523,
          key: 'topic',
          value: 'Latin',
          type: 'string',
          position: 1
        },
        {
          id: 341348,
          content_id: 248523,
          key: 'tag',
          value: 'jam tracks',
          type: 'string',
          position: 1
        },
        {
          id: 334725,
          content_id: 248523,
          key: 'title',
          value: 'Cha Cha 2',
          type: 'string',
          position: 1
        },
        {
          id: 334726,
          content_id: 248523,
          key: 'difficulty',
          value: '4',
          type: 'string',
          position: 1
        },
        {
          id: 334727,
          content_id: 248523,
          key: 'xp',
          value: '150',
          type: 'integer',
          position: 1
        },
        {
          id: 334728,
          content_id: 248523,
          key: 'style',
          value: 'Latin',
          type: 'string',
          position: 1
        },
        {
          id: 341347,
          content_id: 248523,
          key: 'tag',
          value: 'jam track',
          type: 'string',
          position: 2
        },
        {
          id: 341350,
          content_id: 248523,
          key: 'tag',
          value: 'the cha cha',
          type: 'string',
          position: 3
        },
        {
          id: 341349,
          content_id: 248523,
          key: 'tag',
          value: 'cha cha',
          type: 'string',
          position: 4
        },
        {
          id: 341352,
          content_id: 248523,
          key: 'tag',
          value: 'intermediate',
          type: 'string',
          position: 5
        },
        {
          id: 341351,
          content_id: 248523,
          key: 'tag',
          value: '4',
          type: 'string',
          position: 6
        },
        {
          id: 341354,
          content_id: 248523,
          key: 'tag',
          value: 'play alongs',
          type: 'string',
          position: 7
        },
        {
          id: 341353,
          content_id: 248523,
          key: 'tag',
          value: 'play along',
          type: 'string',
          position: 8
        },
        {
          id: 341356,
          content_id: 248523,
          key: 'tag',
          value: 'play-alongs',
          type: 'string',
          position: 9
        },
        {
          id: 341355,
          content_id: 248523,
          key: 'tag',
          value: 'play-along',
          type: 'string',
          position: 10
        },
        {
          id: 341357,
          content_id: 248523,
          key: 'tag',
          value: 'mike michalkow',
          type: 'string',
          position: 11
        },
        {
          id: 341358,
          content_id: 248523,
          key: 'tag',
          value: 'jody fisher',
          type: 'string',
          position: 12
        },
        {
          id: 341359,
          content_id: 248523,
          key: 'tag',
          value: 'baba elefante',
          type: 'string',
          position: 13
        },
        {
          id: 341361,
          content_id: 248523,
          key: 'tag',
          value: 'latin',
          type: 'string',
          position: 14
        },
        {
          id: 341360,
          content_id: 248523,
          key: 'tag',
          value: 'tilden webb',
          type: 'string',
          position: 15
        },
        {
          id: 341794,
          content_id: 248523,
          key: 'tag',
          value: 'cha cha',
          type: 'string',
          position: 16
        },
        {
          id: 341343,
          content_id: 248523,
          key: 'video',
          value: {
            id: 252321,
            slug: 'vimeo-video-407252281',
            type: 'vimeo-video',
            sort: 0,
            status: 'published',
            language: 'en-US',
            brand: 'drumeo',
            total_xp: '150',
            published_on: '2020-04-13 19:00:37',
            created_on: '2020-04-13 19:00:37',
            archived_on: null,
            parent_id: null,
            child_id: null,
            fields: [
              {
                id: 341286,
                content_id: 252321,
                key: 'vimeo_video_id',
                value: '407252281',
                type: 'string',
                position: 1
              },
              {
                id: 341287,
                content_id: 252321,
                key: 'length_in_seconds',
                value: '131',
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
          id: 334729,
          content_id: 248523,
          key: 'instructor',
          value: {
            id: 31878,
            slug: 'mike-michalkow',
            type: 'instructor',
            sort: 0,
            status: 'published',
            language: 'en-US',
            brand: 'drumeo',
            total_xp: null,
            published_on: '2017-12-13 17:23:20',
            created_on: '2017-12-13 17:23:20',
            archived_on: null,
            parent_id: null,
            child_id: null,
            fields: [
              {
                id: 60884,
                content_id: 31878,
                key: 'name',
                value: 'Mike Michalkow',
                type: 'string',
                position: 1
              }
            ],
            data: [
              {
                id: 18668,
                content_id: 31878,
                key: 'head_shot_picture_url',
                value:
                  'https://s3.amazonaws.com/drumeo-assets/instructors/mike-michalkow.png?v=1513185407',
                position: 1
              },
              {
                id: 18669,
                content_id: 31878,
                key: 'biography',
                value:
                  'Mike Michalkow has been teaching drums and percussion for over 20 years, having studied under master drummers Dom Famularo, Jim Chapin, Chuck Silverman, Thomas Lang, John “JR” Robinson, Peter Magadini, and Virgil Donati. Known as a versatile instructor, Mike’s simplified but comprehensive teaching methods have helped thousands of drummers around the world reach their goals, through bestsellers like the “Drumming System”, “Jazz Drumming System”, “Latin Drumming System”, “Moeller Method Secrets”, and “Total Rock Drummer”.',
                position: 1
              }
            ],
            permissions: []
          },
          type: 'content',
          position: 1
        }
      ],
      data: [
        {
          id: 131087,
          content_id: 248523,
          key: 'thumbnail_url',
          value:
            'https://dzryyo1we6bm3.cloudfront.net/thumbnails/30368_thumbnail_360p.jpg',
          position: 1
        },
        {
          id: 131088,
          content_id: 248523,
          key: 'header_image_url',
          value:
            'https://drumeo.s3.amazonaws.com/card-thumbnails/play-alongs/550/drumeo-pa-latin.jpg',
          position: 1
        },
        {
          id: 131195,
          content_id: 248523,
          key: 'mp3_no_drums_no_click_url',
          value:
            'https://s3.amazonaws.com/drumeo/play-along-resources/cha-cha-2/cha-cha-no-click-no-drums.mp3',
          position: 1
        },
        {
          id: 131196,
          content_id: 248523,
          key: 'resource_name',
          value: 'MP3 Without Click',
          position: 1
        },
        {
          id: 131197,
          content_id: 248523,
          key: 'resource_url',
          value:
            'https://s3.amazonaws.com/drumeo/play-along-resources/cha-cha-2/cha-cha-no-click-no-drums.mp3',
          position: 1
        },
        {
          id: 131198,
          content_id: 248523,
          key: 'mp3_yes_drums_no_click_url',
          value:
            'https://s3.amazonaws.com/drumeo/play-along-resources/cha-cha-2/cha-cha-no-click-with-drums.mp3',
          position: 1
        },
        {
          id: 131199,
          content_id: 248523,
          key: 'mp3_no_drums_yes_click_url',
          value:
            'https://s3.amazonaws.com/drumeo/play-along-resources/cha-cha-2/cha-cha-with-click-no-drums.mp3',
          position: 1
        },
        {
          id: 131202,
          content_id: 248523,
          key: 'mp3_yes_drums_yes_click_url',
          value:
            'https://s3.amazonaws.com/drumeo/play-along-resources/cha-cha-2/cha-cha-with-click-with-drums.mp3',
          position: 1
        },
        {
          id: 131200,
          content_id: 248523,
          key: 'resource_name',
          value: 'MP3 With Click',
          position: 2
        },
        {
          id: 131201,
          content_id: 248523,
          key: 'resource_url',
          value:
            'https://s3.amazonaws.com/drumeo/play-along-resources/cha-cha-2/cha-cha-with-click-no-drums.mp3',
          position: 2
        },
        {
          id: 131203,
          content_id: 248523,
          key: 'resource_name',
          value: 'PDF Chart',
          position: 3
        },
        {
          id: 131204,
          content_id: 248523,
          key: 'resource_url',
          value:
            'https://s3.amazonaws.com/drumeo/play-along-resources/cha-cha-2/drumeo-pa310-the-cha-cha.pdf',
          position: 3
        }
      ],
      permissions: [
        {
          id: 1,
          content_id: null,
          content_type: 'play-along',
          permission_id: 1,
          brand: 'drumeo',
          name: 'Drumeo Edge'
        }
      ],
      user_progress: { 149628: [] },
      completed: false,
      started: false,
      progress_percent: 0,
      user_playlists: { 149628: [] },
      is_added_to_primary_playlist: false,
      published_on_in_timezone: {
        date: '2020-04-17 08:00:00.000000',
        timezone_type: 3,
        timezone: 'America/Los_Angeles'
      },
      is_new: false,
      url:
        'https://staging.drumeo.com/laravel/public/members/lessons/play-alongs/248523',
      xp: 150,
      xp_bonus: 150
    },
    {
      id: 247399,
      slug: 'futuristic-solitude',
      type: 'play-along',
      sort: 0,
      status: 'published',
      language: 'en-US',
      brand: 'drumeo',
      total_xp: '175',
      published_on: '2020-03-27 17:00:00',
      created_on: '2020-03-04 13:38:40',
      archived_on: null,
      parent_id: null,
      child_id: null,
      fields: [
        {
          id: 339063,
          content_id: 247399,
          key: 'style',
          value: 'Electronic',
          type: 'string',
          position: 1
        },
        {
          id: 339064,
          content_id: 247399,
          key: 'topic',
          value: 'Electronic',
          type: 'string',
          position: 1
        },
        {
          id: 339066,
          content_id: 247399,
          key: 'tag',
          value: 'play-along',
          type: 'string',
          position: 1
        },
        {
          id: 332432,
          content_id: 247399,
          key: 'title',
          value: 'Futuristic Solitude',
          type: 'string',
          position: 1
        },
        {
          id: 332433,
          content_id: 247399,
          key: 'difficulty',
          value: '3',
          type: 'string',
          position: 1
        },
        {
          id: 332434,
          content_id: 247399,
          key: 'xp',
          value: '150',
          type: 'integer',
          position: 1
        },
        {
          id: 332435,
          content_id: 247399,
          key: 'artist',
          value: 'Tim Proznick',
          type: 'string',
          position: 1
        },
        {
          id: 339095,
          content_id: 247399,
          key: 'bpm',
          value: '92',
          type: 'string',
          position: 1
        },
        {
          id: 339065,
          content_id: 247399,
          key: 'tag',
          value: 'play along',
          type: 'string',
          position: 2
        },
        {
          id: 339068,
          content_id: 247399,
          key: 'tag',
          value: 'tim proznick',
          type: 'string',
          position: 3
        },
        {
          id: 339067,
          content_id: 247399,
          key: 'tag',
          value: 'electronic',
          type: 'string',
          position: 4
        },
        {
          id: 339069,
          content_id: 247399,
          key: 'tag',
          value: 'play alongs',
          type: 'string',
          position: 5
        },
        {
          id: 339072,
          content_id: 247399,
          key: 'tag',
          value: 'jam tracks',
          type: 'string',
          position: 6
        },
        {
          id: 339071,
          content_id: 247399,
          key: 'tag',
          value: 'jam track',
          type: 'string',
          position: 7
        },
        {
          id: 339070,
          content_id: 247399,
          key: 'tag',
          value: 'play-alongs',
          type: 'string',
          position: 8
        },
        {
          id: 339098,
          content_id: 247399,
          key: 'tag',
          value: '3',
          type: 'string',
          position: 9
        },
        {
          id: 339097,
          content_id: 247399,
          key: 'tag',
          value: 'beginner',
          type: 'string',
          position: 10
        },
        {
          id: 339096,
          content_id: 247399,
          key: 'tag',
          value: 'futuristic solitude',
          type: 'string',
          position: 11
        },
        {
          id: 337995,
          content_id: 247399,
          key: 'video',
          value: {
            id: 248758,
            slug: 'vimeo-video-400757190',
            type: 'vimeo-video',
            sort: 0,
            status: 'published',
            language: 'en-US',
            brand: 'drumeo',
            total_xp: '150',
            published_on: '2020-03-25 22:00:19',
            created_on: '2020-03-25 22:00:19',
            archived_on: null,
            parent_id: null,
            child_id: null,
            fields: [
              {
                id: 334965,
                content_id: 248758,
                key: 'vimeo_video_id',
                value: '400757190',
                type: 'string',
                position: 1
              },
              {
                id: 334966,
                content_id: 248758,
                key: 'length_in_seconds',
                value: '215',
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
          id: 332436,
          content_id: 247399,
          key: 'instructor',
          value: {
            id: 235178,
            slug: 'tim-proznick',
            type: 'instructor',
            sort: 0,
            status: 'published',
            language: 'en-US',
            brand: 'drumeo',
            total_xp: null,
            published_on: '2019-10-17 14:19:03',
            created_on: '2019-10-17 14:19:06',
            archived_on: null,
            parent_id: null,
            child_id: null,
            fields: [
              {
                id: 304571,
                content_id: 235178,
                key: 'name',
                value: 'Tim Proznick',
                type: 'string',
                position: 1
              }
            ],
            data: [
              {
                id: 109298,
                content_id: 235178,
                key: 'biography',
                value:
                  '<p>Tim Proznick is an incredible and versatile professional drummer hailing from British Columbia, Vancouver, Canada. His unmatched chops and incredible sense of groove have helped him carve a name for himself in the world of percussion as a go-to musician and a great source of inspiration for up-and-coming drummers. Tim’s mastery of the drum-set has led him to perform with projects and artists such as Superjaded, Hey Ocean!, Kim Churchill, and Potatohead People.</p>',
                position: 1
              },
              {
                id: 109299,
                content_id: 235178,
                key: 'head_shot_picture_url',
                value:
                  'https://d1923uyy6spedc.cloudfront.net/235178-avatar-1571828677.jpg',
                position: 1
              }
            ],
            permissions: []
          },
          type: 'content',
          position: 1
        }
      ],
      data: [
        {
          id: 129838,
          content_id: 247399,
          key: 'thumbnail_url',
          value:
            'https://dzryyo1we6bm3.cloudfront.net/thumbnails/22911_thumbnail_360p.jpg',
          position: 1
        },
        {
          id: 129839,
          content_id: 247399,
          key: 'original_thumbnail_url',
          value:
            'https://dzryyo1we6bm3.cloudfront.net/card-thumbnails/play-alongs/1080/drumeo-pa-electronic.jpg',
          position: 1
        },
        {
          id: 129840,
          content_id: 247399,
          key: 'mp3_no_drums_no_click_url',
          value:
            'https://s3.amazonaws.com/drumeo/play-along-resources/futuristic-solitude/futuristic-solitude-no-drums-no-click.mp3',
          position: 1
        },
        {
          id: 129841,
          content_id: 247399,
          key: 'mp3_no_drums_yes_click_url',
          value:
            'https://s3.amazonaws.com/drumeo/play-along-resources/futuristic-solitude/futuristic-solitude-no-drums-with-click.mp3?AWSAccessKeyId=AKIAZY2OSLKQVNW27EFK&Expires',
          position: 1
        },
        {
          id: 129842,
          content_id: 247399,
          key: 'mp3_yes_drums_no_click_url',
          value:
            'https://s3.amazonaws.com/drumeo/play-along-resources/futuristic-solitude/futuristic-solitude-with-drums-no-click.mp3',
          position: 1
        },
        {
          id: 129843,
          content_id: 247399,
          key: 'mp3_yes_drums_yes_click_url',
          value:
            'https://s3.amazonaws.com/drumeo/play-along-resources/futuristic-solitude/futuristic-solitude-with-drums-with-click.mp3?AWSAccessKeyId=AKIAZY2OSLKQVNW27EFK&Expires=15941',
          position: 1
        },
        {
          id: 129844,
          content_id: 247399,
          key: 'resource_name',
          value: 'PDF Chart',
          position: 1
        },
        {
          id: 129845,
          content_id: 247399,
          key: 'resource_url',
          value:
            'https://d1923uyy6spedc.cloudfront.net/247399-resource-1585324000.pdf',
          position: 1
        },
        {
          id: 129846,
          content_id: 247399,
          key: 'resource_name',
          value: 'MP3 Without Click',
          position: 2
        },
        {
          id: 129847,
          content_id: 247399,
          key: 'resource_url',
          value:
            'https://s3.amazonaws.com/drumeo/play-along-resources/futuristic-solitude/futuristic-solitude-no-drums-no-click.mp3',
          position: 2
        },
        {
          id: 129848,
          content_id: 247399,
          key: 'resource_name',
          value: 'MP3 With Click',
          position: 3
        },
        {
          id: 129849,
          content_id: 247399,
          key: 'resource_url',
          value:
            'https://s3.amazonaws.com/drumeo/play-along-resources/futuristic-solitude/futuristic-solitude-no-drums-with-click.mp3',
          position: 3
        }
      ],
      permissions: [
        {
          id: 1,
          content_id: null,
          content_type: 'play-along',
          permission_id: 1,
          brand: 'drumeo',
          name: 'Drumeo Edge'
        }
      ],
      user_progress: { 149628: [] },
      completed: false,
      started: false,
      progress_percent: 0,
      user_playlists: { 149628: [] },
      is_added_to_primary_playlist: false,
      published_on_in_timezone: {
        date: '2020-03-27 10:00:00.000000',
        timezone_type: 3,
        timezone: 'America/Los_Angeles'
      },
      is_new: false,
      url:
        'https://staging.drumeo.com/laravel/public/members/lessons/play-alongs/247399',
      xp: 150,
      xp_bonus: 150
    },
    {
      id: 246167,
      slug: 'the-odd-life',
      type: 'play-along',
      sort: 0,
      status: 'published',
      language: 'en-US',
      brand: 'drumeo',
      total_xp: '175',
      published_on: '2020-03-07 16:00:00',
      created_on: '2020-02-19 11:11:18',
      archived_on: null,
      parent_id: null,
      child_id: null,
      fields: [
        {
          id: 329284,
          content_id: 246167,
          key: 'title',
          value: 'The Odd Life',
          type: 'string',
          position: 1
        },
        {
          id: 329285,
          content_id: 246167,
          key: 'difficulty',
          value: '6',
          type: 'string',
          position: 1
        },
        {
          id: 332749,
          content_id: 246167,
          key: 'xp',
          value: '150',
          type: 'integer',
          position: 1
        },
        {
          id: 332750,
          content_id: 246167,
          key: 'bpm',
          value: '107',
          type: 'string',
          position: 1
        },
        {
          id: 332751,
          content_id: 246167,
          key: 'style',
          value: 'Electronic',
          type: 'string',
          position: 1
        },
        {
          id: 332752,
          content_id: 246167,
          key: 'artist',
          value: 'Tim Proznick',
          type: 'string',
          position: 1
        },
        {
          id: 332753,
          content_id: 246167,
          key: 'topic',
          value: 'Electronic',
          type: 'string',
          position: 1
        },
        {
          id: 332756,
          content_id: 246167,
          key: 'tag',
          value: '6',
          type: 'string',
          position: 1
        },
        {
          id: 332905,
          content_id: 246167,
          key: 'style',
          value: 'Odd-Time',
          type: 'string',
          position: 2
        },
        {
          id: 332906,
          content_id: 246167,
          key: 'topic',
          value: 'Odd-Time',
          type: 'string',
          position: 2
        },
        {
          id: 332755,
          content_id: 246167,
          key: 'tag',
          value: 'intermediate',
          type: 'string',
          position: 2
        },
        {
          id: 332758,
          content_id: 246167,
          key: 'tag',
          value: 'play along',
          type: 'string',
          position: 3
        },
        {
          id: 332759,
          content_id: 246167,
          key: 'tag',
          value: 'play-along',
          type: 'string',
          position: 4
        },
        {
          id: 332757,
          content_id: 246167,
          key: 'tag',
          value: 'the odd life',
          type: 'string',
          position: 5
        },
        {
          id: 332761,
          content_id: 246167,
          key: 'tag',
          value: 'play alongs',
          type: 'string',
          position: 6
        },
        {
          id: 332760,
          content_id: 246167,
          key: 'tag',
          value: 'electronic',
          type: 'string',
          position: 7
        },
        {
          id: 332762,
          content_id: 246167,
          key: 'tag',
          value: 'play-alongs',
          type: 'string',
          position: 8
        },
        {
          id: 332764,
          content_id: 246167,
          key: 'tag',
          value: 'jam tracks',
          type: 'string',
          position: 9
        },
        {
          id: 332763,
          content_id: 246167,
          key: 'tag',
          value: 'jam track',
          type: 'string',
          position: 10
        },
        {
          id: 329286,
          content_id: 246167,
          key: 'instructor',
          value: {
            id: 235178,
            slug: 'tim-proznick',
            type: 'instructor',
            sort: 0,
            status: 'published',
            language: 'en-US',
            brand: 'drumeo',
            total_xp: null,
            published_on: '2019-10-17 14:19:03',
            created_on: '2019-10-17 14:19:06',
            archived_on: null,
            parent_id: null,
            child_id: null,
            fields: [
              {
                id: 304571,
                content_id: 235178,
                key: 'name',
                value: 'Tim Proznick',
                type: 'string',
                position: 1
              }
            ],
            data: [
              {
                id: 109298,
                content_id: 235178,
                key: 'biography',
                value:
                  '<p>Tim Proznick is an incredible and versatile professional drummer hailing from British Columbia, Vancouver, Canada. His unmatched chops and incredible sense of groove have helped him carve a name for himself in the world of percussion as a go-to musician and a great source of inspiration for up-and-coming drummers. Tim’s mastery of the drum-set has led him to perform with projects and artists such as Superjaded, Hey Ocean!, Kim Churchill, and Potatohead People.</p>',
                position: 1
              },
              {
                id: 109299,
                content_id: 235178,
                key: 'head_shot_picture_url',
                value:
                  'https://d1923uyy6spedc.cloudfront.net/235178-avatar-1571828677.jpg',
                position: 1
              }
            ],
            permissions: []
          },
          type: 'content',
          position: 1
        },
        {
          id: 332754,
          content_id: 246167,
          key: 'video',
          value: {
            id: 247344,
            slug: 'vimeo-video-395297834',
            type: 'vimeo-video',
            sort: 0,
            status: 'published',
            language: 'en-US',
            brand: 'drumeo',
            total_xp: '150',
            published_on: '2020-03-03 22:00:42',
            created_on: '2020-03-03 22:00:42',
            archived_on: null,
            parent_id: null,
            child_id: null,
            fields: [
              {
                id: 332261,
                content_id: 247344,
                key: 'vimeo_video_id',
                value: '395297834',
                type: 'string',
                position: 1
              },
              {
                id: 332262,
                content_id: 247344,
                key: 'length_in_seconds',
                value: '244',
                type: 'integer',
                position: 1
              }
            ],
            data: [],
            permissions: []
          },
          type: 'content',
          position: 1
        }
      ],
      data: [
        {
          id: 124461,
          content_id: 246167,
          key: 'thumbnail_url',
          value:
            'https://dzryyo1we6bm3.cloudfront.net/thumbnails/22911_thumbnail_360p.jpg',
          position: 1
        },
        {
          id: 124462,
          content_id: 246167,
          key: 'original_thumbnail_url',
          value:
            'https://dzryyo1we6bm3.cloudfront.net/card-thumbnails/play-alongs/1080/drumeo-pa-electronic.jpg',
          position: 1
        },
        {
          id: 124463,
          content_id: 246167,
          key: 'mp3_no_drums_no_click_url',
          value:
            'https://s3.amazonaws.com/drumeo/play-along-resources/the-odd-life/the-odd-life-drums-false-click-false.mp3',
          position: 1
        },
        {
          id: 124464,
          content_id: 246167,
          key: 'mp3_no_drums_yes_click_url',
          value:
            'https://s3.amazonaws.com/drumeo/play-along-resources/the-odd-life/the-odd-life-drums-false-click-true.mp3',
          position: 1
        },
        {
          id: 124465,
          content_id: 246167,
          key: 'mp3_yes_drums_no_click_url',
          value:
            'https://s3.amazonaws.com/drumeo/play-along-resources/the-odd-life/the-odd-life-drums-true-click-false.mp3',
          position: 1
        },
        {
          id: 124466,
          content_id: 246167,
          key: 'mp3_yes_drums_yes_click_url',
          value:
            'https://s3.amazonaws.com/drumeo/play-along-resources/the-odd-life/the-odd-life-drums-true-click-true.mp3',
          position: 1
        },
        {
          id: 124467,
          content_id: 246167,
          key: 'resource_name',
          value: 'MP3 Without Click',
          position: 1
        },
        {
          id: 124468,
          content_id: 246167,
          key: 'resource_url',
          value:
            'https://s3.amazonaws.com/drumeo/play-along-resources/the-odd-life/the-odd-life-drums-false-click-false.mp3',
          position: 1
        },
        {
          id: 124469,
          content_id: 246167,
          key: 'resource_name',
          value: 'MP3 With Click',
          position: 2
        },
        {
          id: 124470,
          content_id: 246167,
          key: 'resource_url',
          value:
            'https://s3.amazonaws.com/drumeo/play-along-resources/the-odd-life/the-odd-life-drums-false-click-true.mp3',
          position: 2
        },
        {
          id: 124471,
          content_id: 246167,
          key: 'resource_name',
          value: 'PDF Chart',
          position: 3
        },
        {
          id: 124472,
          content_id: 246167,
          key: 'resource_url',
          value:
            'https://d1923uyy6spedc.cloudfront.net/246167-resource-1583500179.pdf',
          position: 3
        }
      ],
      permissions: [
        {
          id: 1,
          content_id: null,
          content_type: 'play-along',
          permission_id: 1,
          brand: 'drumeo',
          name: 'Drumeo Edge'
        }
      ],
      user_progress: { 149628: [] },
      completed: false,
      started: false,
      progress_percent: 0,
      user_playlists: { 149628: [] },
      is_added_to_primary_playlist: false,
      published_on_in_timezone: {
        date: '2020-03-07 08:00:00.000000',
        timezone_type: 3,
        timezone: 'America/Los_Angeles'
      },
      is_new: false,
      url:
        'https://staging.drumeo.com/laravel/public/members/lessons/play-alongs/246167',
      xp: 150,
      xp_bonus: 150
    }
  ],
  instructors: [
    {
      id: 220967,
      slug: 'daru-jones',
      type: 'instructor',
      sort: 0,
      status: 'published',
      language: 'en-US',
      brand: 'drumeo',
      total_xp: null,
      published_on: '2019-02-26 16:02:50',
      created_on: '2019-02-26 16:02:12',
      archived_on: null,
      parent_id: null,
      child_id: null,
      fields: [
        {
          id: 261271,
          content_id: 220967,
          key: 'title',
          value: 'Daru Jones',
          type: 'string',
          position: 1
        },
        {
          id: 261272,
          content_id: 220967,
          key: 'name',
          value: 'Daru Jones',
          type: 'string',
          position: 1
        }
      ],
      data: [
        {
          id: 109626,
          content_id: 220967,
          key: 'head_shot_picture_url',
          value:
            'https://d1923uyy6spedc.cloudfront.net/220967-avatar-1572358845.jpg',
          position: 1
        },
        {
          id: 109627,
          content_id: 220967,
          key: 'biography',
          value:
            'Daru Jones is a Grammy-award winner with an impressive level of experience performing and recording, and producing at the highest level through his own label: Rusic Records. He has worked with incredible artists and producers, such as Jack White, Slum Village, Talib Kweli, Black Milk, Dwight Yoakam, Jamie Lidell, Pete Rock, Salaam Remi, Gloria Gaynor, Kim Burrell, Q-Tip, Mos Def, and Lorenzo Jovanotti, just to name a few. This level of exposure has led him to play on coveted stages, including One Mic: Hip-Hop Culture Worldwide, the 2013 Grammy Awards, Austin City Limits, Rock The Bells Festival, Montreux Jazz Festival, The David Letterman Show, Jools Holland, The Colbert Report, Saturday Night Live, and MTV. ',
          position: 1
        }
      ],
      permissions: []
    }
  ],
  video_playback_endpoints: [
    {
      file:
        'https://player.vimeo.com/external/393716651.sd.mp4?s=50f8575126b9a70e084931f6f9a717b9125fc22b&profile_id=139&oauth2_token_id=1284792283',
      width: 426,
      height: 240
    },
    {
      file:
        'https://player.vimeo.com/external/393716651.sd.mp4?s=50f8575126b9a70e084931f6f9a717b9125fc22b&profile_id=164&oauth2_token_id=1284792283',
      width: 640,
      height: 360
    },
    {
      file:
        'https://player.vimeo.com/external/393716651.sd.mp4?s=50f8575126b9a70e084931f6f9a717b9125fc22b&profile_id=165&oauth2_token_id=1284792283',
      width: 960,
      height: 540
    },
    {
      file:
        'https://player.vimeo.com/external/393716651.hd.mp4?s=b4962b2c9c71d6e6bf22211195e6d94990eedb29&profile_id=174&oauth2_token_id=1284792283',
      width: 1280,
      height: 720
    },
    {
      file:
        'https://player.vimeo.com/external/393716651.hd.mp4?s=b4962b2c9c71d6e6bf22211195e6d94990eedb29&profile_id=175&oauth2_token_id=1284792283',
      width: 1920,
      height: 1080
    },
    {
      file:
        'https://player.vimeo.com/external/393716651.hd.mp4?s=b4962b2c9c71d6e6bf22211195e6d94990eedb29&profile_id=170&oauth2_token_id=1284792283',
      width: 2560,
      height: 1440
    },
    {
      file:
        'https://player.vimeo.com/external/393716651.hd.mp4?s=b4962b2c9c71d6e6bf22211195e6d94990eedb29&profile_id=172&oauth2_token_id=1284792283',
      width: 3840,
      height: 2160
    }
  ],
  video_poster_image_url:
    'https://i.vimeocdn.com/video/859323532_1280x720.jpg?r=pad',
  captions: [],
  hlsManifestUrl:
    'https://player.vimeo.com/external/393716651.m3u8?s=3cb259477154dde5a3d4f52ac536b64bb6ed1c92&oauth2_token_id=1284792283'
};
