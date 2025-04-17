import {ProjectPageProps} from "./ProjectPage.tsx";
import {Button} from "react-bootstrap";
import {useTheme} from "../ThemeSetter.tsx";

// ---------------------------------------------
// ---------------- Custom Hook ----------------
export function useProjectsDataFactory() {
  const { getStyle } = useTheme();
  
  function listComponentGenerator(innerHtml: JSX.Element) {
    return <li className={getStyle.text}>{innerHtml}</li>
  }

  function wrappedList(elements: JSX.Element[]) {
    return elements.map(element => listComponentGenerator(element))
  }

  const focusFlowInfo: ProjectPageProps = {
    title: 'FocusFlow',
    pictures: [
      "/assets/picture/focusflow/1.png",
      "/assets/picture/focusflow/2.png",
      "/assets/picture/focusflow/3.png",
      "/assets/picture/focusflow/4.png",
      "/assets/picture/focusflow/5.png",
      "/assets/picture/focusflow/6.png",
      "/assets/picture/focusflow/7.png",
      "/assets/picture/focusflow/8.png",
    ],
    features: wrappedList([
      <>Create, remove, and reorder tasks during Focus Sessions</>,
      <>Edit task names and durations</>,
      <><strong>Import tasks</strong> directly from your <strong>Calendar</strong></>,
      <>View the predicted end time for your Focus Session</>,
      <>During Focus Sessions, track remaining time for the current task, see the next activity, and monitor saved or
        exceeded time</>,
      <>Complete tasks, pause sessions, or extend time as needed</>,
      <><strong>Live Activities</strong> provide updates on <strong>Dynamic Island and Lock Screen</strong></>,
      <><strong>Local Notifications</strong>: alerts for task expiration, overdue tasks, and reminders</>,
      <>Focus Session status <strong>continuously updates in the background</strong> (timer and notifications)</>,
      <>Tasks are saved using <strong>UserDefault</strong></>,
      <>Supports both dark and light modes</>
    ]),
    teachStack: wrappedList([
      <>Swift</>,
      <>SwiftUI</>,
      <>ActivityKit</>,
      <>UsersDefaults</>,
      <>Architecture: MVVM</>
    ]),
    description: `FocusFlow is a SwiftUI app designed to support individuals with ADHD and other neurodivergences in staying focused and organized. 
It guides users through structured Focus Sessions with real-time feedback on remaining time, upcoming tasks, and time saved by staying on track. 
Timers and sessions persist in the background for uninterrupted focus. Users receive timely alerts as tasks approach, reach, or exceed their time limits. 
The app also supports Live Activities, allowing users to monitor their sessions directly from the Lock Screen or Dynamic Island without opening the app.`,
    buttons: [
      (
        <Button
          onClick={
            () => {
              window.open('https://github.com/maxiparis/FocusFlow', '_blank')
            }
          }
        >
          <i className="bi bi-github" style={{marginRight: '8px'}}></i>
          See GitHub Repo
        </Button>
      ),
      (
        <Button
          onClick={
            () => {
              window.open('https://focusflow.maxiparis.com', '_blank');
            }
          }
        >
          See Website and Demo
        </Button>
      )
    ]
  }

  const improvifyInfo: ProjectPageProps = {
    title: 'Improvify',
    pictures: [
      "/assets/picture/improvify/1.png",
      "/assets/picture/improvify/2.png",
      "/assets/picture/improvify/3.png",
      "/assets/picture/improvify/4.png",
      "/assets/picture/improvify/5.png",
      "/assets/picture/improvify/6.png",
    ],
    features: wrappedList([
      <strong>My first app published on the App Store! 🎉🎉</strong>,
      <>Create, rename, update, and delete your habits. Update names and set reminder times</>,
      <><strong>Local notifications</strong> configured by the user to send reminders on time</>,
      <>Track both daily and weekly habits</>,
      <>Weekly habits are marked as completed for the whole week</>,
      <><strong>Infinite horizontal scrolling</strong> to navigate between days</>,
      <>Switch days by swiping or tapping on arrows</>,
      <><strong>Charts</strong> to visualize progress over time</>,
      <>Supports both dark and light modes</>
    ]),
    teachStack: wrappedList([
      <>Language: Swift</>,
      <>UI Framework: SwiftUI</>,
      <>Persistence: <strong>SwiftData</strong></>,
      <>Other Modules: <strong>Swift Charts</strong></>,
      <>Architecture: MVVM</>
    ]),
    description: `Improvify is a minimalist SwiftUI habit tracker that helps users build positive routines without the 
    pressure of perfect streaks. Instead of focusing on consecutive completions, Improvify highlights long-term progress 
    through a dynamic graph that visualizes improvement over time. Users can create both daily and weekly habits, 
    set smart reminders, and track their consistency without guilt—making the app ideal for personal growth, wellness, 
    and productivity goals. Built using SwiftUI, SwiftData, and SwiftCharts.`,
    buttons: [
      (
        <Button
          onClick={
            () => {
              window.open('https://github.com/maxiparis/improvify', '_blank')
            }
          }
        >
          <i className="bi bi-github" style={{marginRight: '8px'}}></i>
          See GitHub Repo
        </Button>
      ),
      (
        <a
          className="d-flex justify-content-center"
          href="https://apps.apple.com/us/app/improvify-habit-tracker/id6742771479?itscg=30200&itsct=apps_box_badge&mttnsubad=6742771479"
        >
          <img
            className="text-center"
            src="https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/black/en-us?releaseDate=1741305600"
            alt="Download on the App Store"
            style={{height: 50}}/>
        </a>
      )
    ]
  }


  return { focusFlowInfo, improvifyInfo };
}