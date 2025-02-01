export const DEFAULT_WORKOUTS = [
    {
        week: 1,
        trainingWeek: {
          saturday: "14km ZR com 2 subidas do Cavalo (1 subida em cada volta)",
        },
        longRunDistance: 14,
        longRunDurationMinutes: null,
      },
      {
        week: 2,
        trainingWeek: {
          saturday: "16km ZR",
        },
        longRunDistance: 16,
        longRunDurationMinutes: null,
      },
      {
        week: 3,
        trainingWeek: {
          saturday: "60' ZR",
        },
        longRunDistance: 0,
        longRunDurationMinutes: "01:00:00",
      },
      {
        week: 4,
        trainingWeek: {
          saturday: "18km ZR com 2 subidas do Cavalo (1 subida em cada volta)",
        },
        longRunDistance: 18,
        longRunDurationMinutes: null,
      },
      {
        week: 5,
        trainingWeek: {
          saturday: "18km ZR",
        },
        longRunDistance: 18,
        longRunDurationMinutes: null,
      },
      {
        week: 6,
        trainingWeek: {
          saturday: "20km (4km ZR + 12km ritmo de prova + 4km ZR)",
        },
        longRunDistance: 20,
        longRunDurationMinutes: null,
      },
      {
        week: 7,
        trainingWeek: {
          saturday: "60' ZR",
        },
        longRunDistance: 0,
        longRunDurationMinutes: "01:00:00",
      },
      {
        week: 8,
        trainingWeek: {
          saturday: "22km ZR com 2 subidas do Cavalo",
        },
        longRunDistance: 22,
        longRunDurationMinutes: null,
      },
      {
        week: 9,
        trainingWeek: {
          saturday: "20km ZR",
        },
        longRunDistance: 20,
        longRunDurationMinutes: null,
      },
      {
        week: 10,
        trainingWeek: {
          saturday: "22km (4km ZR + 14km ritmo de prova + 4km ZR)",
        },
        longRunDistance: 22,
        longRunDurationMinutes: null,
      },
      {
        week: 11,
        trainingWeek: {
          saturday: "60' ZR",
        },
        longRunDistance: 0,
        longRunDurationMinutes: "01:00:00",
      },
      {
        week: 12,
        trainingWeek: {
          saturday: "24km ZR com duas subidas do Cavalo",
        },
        longRunDistance: 24,
        longRunDurationMinutes: null,
      },
      {
        week: 13,
        trainingWeek: {
          saturday: "26km ZR",
        },
        longRunDistance: 26,
        longRunDurationMinutes: null,
      },
      {
        week: 14,
        trainingWeek: {
          saturday: "26km (5km ZR + 16km ritmo de prova + 5km ZR)",
        },
        longRunDistance: 26,
        longRunDurationMinutes: null,
      },
      {
        week: 15,
        trainingWeek: {
          saturday: "60' ZR",
        },
        longRunDistance: 0,
        longRunDurationMinutes: "01:00:00",
      },
      {
        week: 16,
        trainingWeek: {
          saturday: "26km ZR (3km ZR + 10km (5'' mais lentos que o ritmo de prova) + 10km (no ritmo de prova) + 3km ZR) ou Golden Run",
        },
        longRunDistance: 26,
        longRunDurationMinutes: null,
      },
      {
        week: 17,
        trainingWeek: {
          saturday: "28km ZR",
        },
        longRunDistance: 28,
        longRunDurationMinutes: null,
      },
      {
        week: 18,
        trainingWeek: {
          saturday: "32km (12km ZR + 20km em ritmo de prova)",
        },
        longRunDistance: 32,
        longRunDurationMinutes: null,
      },
      {
        week: 19,
        trainingWeek: {
          saturday: "18km ZM",
        },
        longRunDistance: 18,
        longRunDurationMinutes: null,
      },
      {
        week: 20,
        trainingWeek: {
          saturday: "10km ZR",
        },
        longRunDistance: 10,
        longRunDurationMinutes: null,
      },
      {
        week: 21,
        trainingWeek: {
          sunday: "42,2km",
        },
        longRunDistance: 42.2,
        longRunDurationMinutes: null,
      },
  ];
  
  export const INITIAL_WEEKS = Array.from({ length: 21 }, (_, i) => ({
    week: i + 1,
    hasWorkout: false,
    workout: {
      monday: "",
      tuesday: "",
      wednesday: "",
      thursday: "",
      friday: "",
      saturday: "",
      sunday: "",
    },
    longRunDistance: 0.0,
    longRunDurationMinutes: null,
  }));