import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DayPicker, useDayPicker } from 'react-day-picker';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
	className,
	classNames,
	showOutsideDays = true,
	...props
}: CalendarProps) {
	return (
		<DayPicker
			showOutsideDays={showOutsideDays}
			className={cn('p-3', className)}
			classNames={{
				months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
				month: 'space-y-4',
				month_caption: 'flex justify-center items-center pt-1 mb-4',
				caption_label: 'text-sm font-medium',
				nav: 'hidden',
				button_previous: 'hidden',
				button_next: 'hidden',
				month_grid: 'w-full border-collapse space-y-1',
				weekdays: 'flex',
				weekday:
					'text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]',
				week: 'flex w-full mt-2',
				day: cn(
					'relative p-0 text-center text-sm focus-within:relative focus-within:z-20',
					'h-9 w-9',
					'[&:has([aria-selected])]:bg-accent',
					'[&:has([aria-selected].outside)]:bg-accent/50',
					'[&:has([aria-selected].range_end)]:rounded-r-md',
					'first:[&:has([aria-selected])]:rounded-l-md',
					'last:[&:has([aria-selected])]:rounded-r-md'
				),
				day_button: cn(
					buttonVariants({ variant: 'ghost' }),
					'h-9 w-9 p-0 font-normal aria-selected:opacity-100'
				),
				range_end: 'day-range-end',
				selected:
					'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground',
				today: 'bg-accent text-accent-foreground',
				outside:
					'day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground',
				disabled: 'text-muted-foreground opacity-50',
				range_middle:
					'aria-selected:bg-accent aria-selected:text-accent-foreground',
				hidden: 'invisible',
				...classNames,
			}}
			components={{
				Chevron: ({ className, orientation, ...props }) => {
					const Icon = orientation === 'left' ? ChevronLeft : ChevronRight;
					return <Icon className={cn('h-4 w-4', className)} {...props} />;
				},
				MonthCaption: ({ calendarMonth }) => {
					const { goToMonth, nextMonth, previousMonth } = useDayPicker();

					return (
						<div className="flex justify-center items-center pt-1 mb-4">
							<button
								type="button"
								className={cn(
									buttonVariants({ variant: 'outline' }),
									'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100'
								)}
								onClick={() => previousMonth && goToMonth(previousMonth)}
								disabled={!previousMonth}
								aria-label="Go to previous month"
							>
								<ChevronLeft className="h-4 w-4" />
							</button>
							<div className="text-sm font-medium mx-4">
								{calendarMonth.date.toLocaleDateString('en-US', {
									month: 'long',
									year: 'numeric',
								})}
							</div>
							<button
								type="button"
								className={cn(
									buttonVariants({ variant: 'outline' }),
									'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100'
								)}
								onClick={() => nextMonth && goToMonth(nextMonth)}
								disabled={!nextMonth}
								aria-label="Go to next month"
							>
								<ChevronRight className="h-4 w-4" />
							</button>
						</div>
					);
				},
			}}
			{...props}
		/>
	);
}
Calendar.displayName = 'Calendar';

export { Calendar };
