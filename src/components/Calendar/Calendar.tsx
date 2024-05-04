import Cal from 'react-calendar';
import moment from 'moment';

export default function Calendar() {
  return (
    <div>
      <Cal
        locale="ko-KR" //showNeighboringMonth={false}
        calendarType="gregory"
        formatDay={(locale, date) => moment(date).format('D')}
      />
    </div>
  );
}
