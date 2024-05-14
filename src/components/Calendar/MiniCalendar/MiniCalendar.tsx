import Cal from 'react-calendar';
import moment from 'moment';

export default function MiniCalendar({
  onClickDay,
  titleContent,
}: {
  onClickDay: () => void;
  titleContent: () => void;
}) {
  return (
    <div>
      <Cal
        locale="ko-KR" //showNeighboringMonth={false}
        calendarType="gregory"
        formatDay={(locale, date) => moment(date).format('D')}
        formatMonthYear={(locale, date) => moment(date).format('YYYY. MM')}
        onClickDay={onClickDay}
        tileContent={titleContent}
      />
    </div>
  );
}
