import { useEffect, useState } from "react";

import { Agenda, DaysOfWeek } from "@shared/domain/Agenda";
import { listAgendaService } from "@services/agendas/list";

export const useAgenda = () => {
  const [agenda, setAgenda] = useState<Agenda[]>([]);

  useEffect(() => {
    listAgendaService().then((data) => setAgenda(data));
  }, []);

  return {
    sunday: agenda.filter((age) => age.days.includes(DaysOfWeek.Sunday)),
    monday: agenda.filter((el) => el.days.includes(DaysOfWeek.Monday)),
    tuesday: agenda.filter((el) => el.days.includes(DaysOfWeek.Tuesday)),
    wednesday: agenda.filter((el) => el.days.includes(DaysOfWeek.Wednesday)),
    thursday: agenda.filter((el) => el.days.includes(DaysOfWeek.Thursday)),
    friday: agenda.filter((el) => el.days.includes(DaysOfWeek.Friday)),
    saturday: agenda.filter((el) => el.days.includes(DaysOfWeek.Saturday)),
  } as Record<string, Agenda[]>;
};
