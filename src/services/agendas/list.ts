import { Agenda, DaysOfWeek } from "@shared/domain/Agenda";
import { clientHttp } from "@services/client";

type AgendaApi = {
  title: string;
  date: number[];
  created_at: string;
};

type ApiResponse = Array<AgendaApi>;

const toAgenda = (agenda: AgendaApi): Agenda => {
  const days: Array<DaysOfWeek> = agenda.date;

  return {
    days,
    title: agenda.title,
  };
};

export const listAgendaService = async (): Promise<Agenda[]> => {
  const response = await clientHttp.get<ApiResponse>("/agendas");
  const agenda = response.data.map(toAgenda);

  return agenda;
};
