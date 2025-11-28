

class CourseRegistration {
    constructor() {
        this.courses = [];
    }

    addCourse(courseName) {
        this.courses.push(courseName);
        return `${courseName} added successfully.`;
    }

    getCourses() {
        return this.courses;
    }
}


class EventCalendar {
    constructor() {
        this.events = [];
    }

    addEvent(eventName, date) {
        this.events.push({ eventName, date });
        return `${eventName} scheduled on ${date}`;
    }

    listEvents() {
        return this.events;
    }
}

const reg = new CourseRegistration();
reg.addCourse("Java");
reg.addCourse("Networks");

const cal = new EventCalendar();
cal.addEvent("Hackathon", "2025-02-15");

console.log(reg.getCourses());
console.log(cal.listEvents());
