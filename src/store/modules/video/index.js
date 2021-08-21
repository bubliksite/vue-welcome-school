import backgroundJumbotron from '@/assets/back_video.png'

export default {
  state: {
    jumbotron: {
      background: backgroundJumbotron,
      title: 'Видео <br/> Блог',
      subtitle: 'Welcome school'
    },
    shows: [
      {
        title: 'weekly english',
        description:
          'Изучение иностранного языка – процесс непростой, поэтому ' +
          'мы стараемся сделать его максимально доступным и комфортным. Это ' +
          'касается и подачи материала, и финансовой стороны вопроса. Наши ' +
          'опытные и доброжелательные преподаватели делают процесс обучения ' +
          'максимально комфортным, помогают избавиться от пробелов и неясностей, ' +
          'а также легче запомнить большой объем новой информации.'
      },
      {
        title: 'dirty english',
        description:
          'Изучение иностранного языка – процесс непростой, поэтому ' +
          'мы стараемся сделать его максимально доступным и комфортным. Это ' +
          'максимально комфортным, помогают избавиться от пробелов и неясностей, ' +
          'а также легче запомнить большой объем новой информации.'
      }
    ],
    videos: [
      {
        videoId: 'BKUXNFWlRRQ',
        title: 'Title of episode',
        description: 'Short description of the video. Short description of the video. Short description of the video',
        episode: '1',
        show: 'weekly english',
        season: '1'
      },
      {
        videoId: '_zgkiKS9cf0',
        title: 'Title of episode',
        description: 'Short description of the video. Short description of the video. Short description of the video',
        episode: '2',
        show: 'weekly english',
        season: '1'
      },
      {
        videoId: 'HAIR9-igMR0',
        title: 'Title of episode',
        description: 'Short description of the video. Short description of the video. Short description of the video',
        episode: '3',
        show: 'weekly english',
        season: '1'
      },
      {
        videoId: 'hQn6MzHGvlQ',
        title: 'Title of episode',
        description: 'Short description of the video. Short description of the video. Short description of the video',
        episode: '1',
        show: 'weekly english',
        season: '2'
      },
      {
        videoId: 'YUiUTz_N7aM',
        title: 'Title of episode',
        description: 'Short description of the video. Short description of the video. Short description of the video',
        episode: '2',
        show: 'weekly english',
        season: '2'
      },
      {
        videoId: 's53z84ca4P8',
        title: 'Title of episode',
        description: 'Short description of the video. Short description of the video. Short description of the video',
        episode: '3',
        show: 'weekly english',
        season: '2'
      },
      {
        videoId: '_oUxkL7ikKQ',
        title: 'Title of episode',
        description: 'Short description of the video. Short description of the video. Short description of the video',
        episode: '1',
        show: 'dirty english',
        season: '1'
      },
    ]
  }
}
