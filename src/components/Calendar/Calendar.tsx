import Cal from 'react-calendar';
import moment from 'moment';

export default function Calendar({
  fun,
  data,
  onClick,
}: {
  fun: any;
  data: any;
  onClick: any;
}) {
  return (
    <div>
      <Cal
        locale="ko-KR" //showNeighboringMonth={false}
        calendarType="gregory"
        formatDay={(locale, date) => moment(date).format('D')}
        onActiveStartDateChange={fun}
        tileContent={({ date, view }) => {
          if (view == 'month' && data && data.length > 0) {
            const content = data.map((element: any) => {
              if (moment(date).format('YYYY-MM-DD') == element.date) {
                const { completed, confirmed, pending } = element.reservations;
                const nonZeroValues = Object.entries({
                  completed,
                  confirmed,
                  pending,
                }).filter(([key, value]) => value !== 0);

                return (
                  <div key={element.date}>
                    {nonZeroValues.map((item) => {
                      // Wrap the arrow function inside parentheses
                      return (
                        <div
                          key={item}
                        >{`${item[0] == 'completed' ? '완료' : item[0] == 'confirmed' ? '승인' : item[0] == 'pending' ? '예약' : ''} ${item[1]}`}</div>
                      );
                    })}
                  </div>
                );
              }
              return null;
            });
            return content;
          }
        }}
        onClickDay={onClick}
      />
    </div>
  );
}
