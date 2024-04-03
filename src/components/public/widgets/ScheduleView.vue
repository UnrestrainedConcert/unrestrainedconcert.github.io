<template>
    <div class="schedule-view">
        <div class="title-row">
            <div class="date schedule-item">{{DateTitle}}</div>
            <div class="time schedule-item">{{TimeTitle}}</div>
            <div class="length schedule-item">{{LengthTitle}}</div>
            <div class="location schedule-item">{{LocationTitle}}</div>
        </div>
        <div class="content-row">
            <div class="date schedule-item">{{DateContent}}</div>
            <div class="time schedule-item">{{TimeContent}}</div>
            <div class="length schedule-item">{{LengthContent}}</div>
            <div class="location schedule-item">{{LocationContent}}</div>
        </div>
    </div>
</template>

<style scoped>
.schedule-view {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 57vw;
    margin-left: auto;
    margin-right: auto;
}

.title-row {
    color: darkgray;
    font-size: 1.2vh;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    border-bottom: 1px solid lightgray;
    width: 57vw;
    margin-left: auto;
    margin-right: auto;
}

.content-row {
    color: black;
    font-size: 1.6vh;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 57vw;
    margin-left: auto;
    margin-right: auto;
}

.schedule-item {
    padding-left: 1vw;
    padding-right: 1vw;
    margin-left: auto;
    margin-right: auto;
}

.date {
    width: 5vw;
    text-align: center;
}

.time {
    width: 7vw;
    text-align: center;
}

.length {
    width: 12vw;
    text-align: center;
}

.location {
    width: 18vw;
    text-align: center;
}
</style>

<script>
    export default {
        name: 'ScheduleView',
        props: {
            DateContent: String,
            TimeContent: String,
            LengthContent: String,
            LocationContent: String,
            isDateTentaive: Boolean,
            isTimeTentative: Boolean,
            isLengthEstimated: Boolean,
            isLocationTentative: Boolean
        },
        data() {
            return {
                DateTitle: 'Date',
                TimeTitle: 'Starting Time',
                LengthTitle: 'Length of Concert',
                LocationTitle: 'Performance Location'
            }
        },
        mounted() {
            if (this.isDateTentaive) {
                this.DateTitle += ' (Tentative)';
            }
            if (this.isTimeTentative) {
                this.TimeTitle += ' (Tentative)';
            }
            if (this.isLengthEstimated) {
                this.LengthTitle += ' (Estimated)';
            }
            if (this.isLocationTentative) {
                this.LocationTitle += ' (Tentative)';
            }
        }
    };
</script>