import Router from "next/router";
import { useEffect, useState } from "react";
import { api } from "../services/api";
import styles from "../styles/components/Table.module.css";
import { EventBoxProps } from "./EventBox";
import { ScheduleColumn } from "./ScheduleColumn";
import Swal from 'sweetalert2'

interface TableProps {
  selectedEvents: Array<number>
  setSelectedEvents: Function
  showSubscriptions: Boolean
}

export default function Table({selectedEvents, setSelectedEvents, showSubscriptions}:TableProps) {
  const [events, setEvents] = useState<Array<EventBoxProps>>([]);
  const [subEvents, setSubEvents] = useState<Array<EventBoxProps>>([]);
  const [subscribed, setSubscribed] = useState<Array<number>>([]);
  const [schedules, setSchedules] = useState<Array<Array<Date>>>([]);
  
  function loadSchedules() {
    let times = []; 
    let start= new Date("2022-11-22T08:00:00.000Z"); //GMT (Brasilia +3 ex: 6h BR == 9h GMT)
    for(var i = 0;i<23; i++) {
      let end = new Date(start.getTime())
      end.setMinutes(end.getMinutes() + 90)
      times[i] = [
        new Date(start.getTime()),
        new Date(end.getTime())
      ]
      start.setMinutes(start.getMinutes() + 90)
    }
    setSchedules(times);
  }

  async function fetchEvents(){
    let subscribedEvents:Array<number> = [];
    const authType = localStorage.getItem('CTPORTASABERTASAUTHTYPE')
    
    try{
      const response = await api.get(`${authType}/events/${localStorage.getItem('CTPORTASABERTASAUTHID')}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('CTPORTASABERTASTOKEN')}` }
      })
      response.data?.map((e:EventBoxProps)=>{
        subscribedEvents = [...subscribedEvents, e.id]
      })
      setSubscribed(subscribedEvents)
      setSubEvents(response.data)
    } catch {
      try{
        let response = await api.put('token/refresh', {
          "oldToken":localStorage.getItem('CTPORTASABERTASTOKEN')
        })

        localStorage.setItem('CTPORTASABERTASTOKEN', response.data.access_token);
        response = await api.get(`${authType}/events/${localStorage.getItem('CTPORTASABERTASAUTHID')}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('CTPORTASABERTASTOKEN')}` }
        })
        response.data?.map((e:EventBoxProps)=>{
          subscribedEvents = [...subscribedEvents, e.id]
        })
        setSubscribed(subscribedEvents)
        setSubEvents(response.data)
      } catch (err:any) {
        Swal.fire('Erro','Erro ao carregar os eventos inscritos, redirecionando para página inicial... ' + err.response.data.message,'error')
        Router.push('/')
      }
    }

    if(!showSubscriptions){
      try {      
        const response = await api.post('events',{
          key:process.env.NEXT_PUBLIC_API_KEY
        });
        setEvents(response.data)
      } catch(err:any){
        Swal.fire('Erro','Erro ao carregar os eventos ' + err.response.data.message,'error')
      }
    } else {
      setEvents(subEvents) 
    }
  }
  
  useEffect(()=>{
    fetchEvents()
    loadSchedules()
  },[showSubscriptions])

  return (
    <div className={styles.EventsContainer}>
      <table className={styles.EventsTable}>
        <tbody>
          <tr>
            <th></th>
            <th>Visitas</th>
            <th>Oficinas</th>
          </tr>

          {schedules.map((startEnd, index) => (
            <ScheduleColumn
              key={index}
              startEnd={startEnd}
              visitations={events.filter(
                (item) =>
                  (new Date(item.time)<startEnd[1]) &&
                  // TODO: add end time to backend to remove 1h30min fixed time
                  (new Date((new Date(item.time)).getTime() + 90*60*1000)>startEnd[0]) &&
                  (item.type=="visit")
              )}
              workshops={events.filter(
                (item) =>
                (new Date(item.time)<startEnd[1]) &&
                // TODO: add end time to backend to remove 1h30min fixed time
                (new Date((new Date(item.time)).getTime() + 90*60*1000)>startEnd[0]) &&
                (item.type=="workshop")
              )}
              selectedEvents={selectedEvents}
              setSelectedEvents={setSelectedEvents}
              subscribedEvents={subscribed}
              setSubscribedEvents={setSubscribed}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
