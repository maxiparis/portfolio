import {ProjectPageProps} from "./ProjectPage.tsx";
import {Button} from "react-bootstrap";
import {useTheme} from "../ThemeSetter.tsx";
import {OpenRepoButton} from "./OpenRepoButton.tsx";

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
      (<OpenRepoButton url={"https://github.com/maxiparis/FocusFlow"} />),
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
        <a
          className="d-flex justify-content-center"
          href="https://apps.apple.com/us/app/improvify-habit-tracker/id6742771479?itscg=30200&itsct=apps_box_badge&mttnsubad=6742771479"
        >
          <img
            className="text-center"
            src="https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/black/en-us?releaseDate=1741305600"
            alt="Download on the App Store"
            style={{height: 60}}
          />
        </a>
      ),
      (<OpenRepoButton url={'https://github.com/maxiparis/improvify'} />),
    ]
  }

  const conoSurInfo: ProjectPageProps = {
    title: 'Cono Sur',
    pictures: [
      "/assets/picture/conosur/1.png",
      "/assets/picture/conosur/2.png",
      "/assets/picture/conosur/3.png",
      "/assets/picture/conosur/4.png",
      "/assets/picture/conosur/5.png",
      "/assets/picture/conosur/6.png",
      "/assets/picture/conosur/7.png",
      "/assets/picture/conosur/8.png",
    ],
    features: wrappedList([
      <>Create, remove, and update Recipes and Categories</>,
      <>Uses <strong>NavigationSplitView</strong> to allow tab view for iPad users</>,
      <>Recipes display an image using <strong>AsyncImage</strong> to improve User Interface</>,
      <><strong>Favorite or unfavorite</strong> recipes</>,
      <>All fields of a recipe can be modified (title, image URL, description, ingredients, steps, categories, etc)</>,
      <>Each category is associated with an emoji to improve UI and UX.</>,
      <>Recipes list view: Search a specific recipe by keyword</>,
      <>Supports both dark and light modes</>
    ]),
    teachStack: wrappedList([
      <>Swift</>,
      <>SwiftUI</>,
      <>SwiftData</>,
      <>NavigationSplitView</>,
      <>Architecture: MVVM</>
    ]),
    description: `A native iOS app showcasing traditional recipes from southern South America, including countries like 
    Chile, Argentina, and Paraguay. Each recipe features an image (loaded via AsyncImage), along with key details 
    such as servings, cook time, ingredients, and step-by-step instructions. Users can edit all recipe fields, 
    including the title, description, instructions, and categories. Favorites can be saved, and users can create entirely 
    new recipes and categories.`,
    buttons: [
      (<OpenRepoButton url={"https://github.com/maxiparis/is543-recipes"} />)
    ]
  }


  const learnSpanishInfo: ProjectPageProps = {
    title: 'Learn Spanish',
    pictures: [
      "/assets/picture/learnSpanish/1.png",
      "/assets/picture/learnSpanish/2.png",
      "/assets/picture/learnSpanish/3.png",
      "/assets/picture/learnSpanish/4.png",
      "/assets/picture/learnSpanish/5.png",
      "/assets/picture/learnSpanish/6.png",
      "/assets/picture/learnSpanish/7.png",
      "/assets/picture/learnSpanish/8.png",
    ],
    features: wrappedList([
      <>The app is organized by topics.</>,
      <>Each topic includes a <strong>lesson, a practice mode, a quiz mode, and a word list</strong>. Users can mark the Lesson and
        Practice as completed, but the Quiz will be marked as completed only when all questions are answered
        correctly.</>,
      <>Practice Mode: Words are randomized, and progress is displayed. Users can navigate by swiping or tapping
        buttons.</>,
      <>Quiz Mode: Shows the highest score, current score, and remaining questions.</>,
      <>Quiz Mode: <strong>Answering correctly within 20 seconds rewards bonus points.</strong> Users are informed if they lose these
        points by exceeding the time limit.</>,
      <>Quiz Mode: <strong>Plays a sound</strong> for correct and incorrect answers.</>,
      <>Quiz Mode: On the last question, users are redirected to the Topic Intro view.</>,
      <>Scores, unlocked topics, completed lessons, and other progress details are stored locally on the user's device
        using <strong>UserDefaults</strong>.</>,
      <>Supports both <strong>Portrait and Landscape</strong> Modes on all devices.</>,
      <>Topics remain locked until the previous Lesson is completed, simulating a <strong>progression system</strong> similar to
        Duolingo.</>,
    ]),
    teachStack: wrappedList([
      <>Swift</>,
      <>SwiftUI</>,
      <>UserDefaults</>,
      <>AVFoundation</>,
      <>Architecture: MVVM</>
    ]),
    description: `A SwiftUI language learning app designed to make vocabulary practice engaging and interactive. 
    Each topic includes a lesson, practice mode, quiz mode, and a word list—unlocked progressively to simulate 
    learning levels like Duolingo. Practice mode features animated, swipeable cards with color-coded definitions, 
    while quiz mode offers time-based challenges, bonus points, sound feedback, and score tracking.`,
    buttons: [
      (<OpenRepoButton url={"https://github.com/maxiparis/is543-learn-spanish-pj1"} />)
    ]
  }

  return { focusFlowInfo, improvifyInfo, conoSurInfo, learnSpanishInfo };
}