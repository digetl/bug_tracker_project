<template lang="html">
  <div class="content">
    <h2>List all tickets</h2>
   
      <b-button v-on:click="showUrgentTickets()" >Show Urgent Tickets</b-button>
      <b-button v-on:click="showMediumTickets()" >Show Medium Tickets</b-button>
      <b-button v-on:click="showLowTickets()" >Show Low Tickets</b-button>
      <b-button v-on:click="showTickets()" >Show All Tickets</b-button>

      <ul>
        <li v-for="(ticket, index) in ticketsToDisplay" :key="index" :ticket="ticket" class="ticket-link" v-on:click="selectTicket(ticket)">Ticket name: {{ticket.name}}</li>
      </ul>

    
  </div>
</template>

<script>
import SingleTicket from "@/components/SingleTicket";
import { eventBus } from "@/main";

export default {
  name: "TicketList",
  props: ["tickets"],
  data() {
    return {
      priority: null,
    };
  },
  components: {
    "single-ticket": SingleTicket,
  },

  methods: {
    selectTicket(ticket) {
      eventBus.$emit("selected-ticket", ticket);
      eventBus.$emit("selected-page", "single-ticket");
    },
    showUrgentTickets() {
      this.priority = "Urgent";
    },
    showMediumTickets() {
      this.priority = "Medium";
    },
    showLowTickets() {
      this.priority = "Low";
    },
    showTickets() {
      this.priority = null;
    },
  },

  computed: {
   ticketsToDisplay() {
      if (this.priority == null) return this.tickets;
      else
        return this.tickets.filter((ticket) => {
          return ticket.priorityStatus == this.priority;
        });
    },
  },
};
</script>


<style scoped>
li:hover {
  cursor: pointer;
}

.ticket-list {
  padding: 1rem;
  margin: 0;
}

#tickets-wrapper ul {
  padding: 0;
  margin: 0;
}

li {
  margin: 0;
}

.ticket-link {
  padding: 0.5rem 0;
}
</style>