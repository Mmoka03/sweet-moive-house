import { movieSchedule } from "../../util/api/movieSchedule";

export const movieScheduleTestDataList: movieSchedule[] = [
{
    schedule_no: 1001,
    movie_name: '어벤저스',
    category: 1,
    runtime_minute: 120,
    run_day: new Date('2020-11-11T10:50:00'),
    room_no: 1
},
{
    schedule_no: 1002,
    movie_name: '어벤저스',
    category: 1,
    runtime_minute: 120,
    run_day: new Date('2020-11-11T13:50:00'),
    room_no: 1
},
{
    schedule_no: 1003,
    movie_name: '노팅힐',
    category: 2,
    runtime_minute: 120,
    run_day: new Date('2020-11-11T08:10:00'),
    room_no: 2
},
{
    schedule_no: 1004,
    movie_name: '노팅힐',
    category: 2,
    runtime_minute: 120,
    run_day: new Date('2020-11-11T17:00:00'),
    room_no: 2
},
{
    schedule_no: 1005,
    movie_name: '아이언맨',
    category: 1,
    runtime_minute: 120,
    run_day: new Date('2020-11-11T14:50:00'),
    room_no: 3
},
{
    schedule_no: 1006,
    movie_name: '아이언맨',
    category: 1,
    runtime_minute: 120,
    run_day: new Date('2020-11-11T17:50:00'),
    room_no: 3
},
{
    schedule_no: 1007,
    movie_name: '겨울왕국2',
    category: 5,
    runtime_minute: 130,
    run_day: new Date('2020-11-11T11:10:00'),
    room_no: 4
},
{
    schedule_no: 1008,
    movie_name: '겨울왕국2',
    category: 5,
    runtime_minute: 130,
    run_day: new Date('2020-11-11T16:50:00'),
    room_no: 4
}
]