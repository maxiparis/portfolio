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

  const focusFlowInfo: ProjectPageProps = {
    title: 'FocusFlow',
    pictures: ["/assets/picture/example3.png", "/assets/picture/example3.png", "/assets/picture/example3.png"],
    features: [
      listComponentGenerator(<>Create, eliminate and reorder tasks in Focus Session</>),
      listComponentGenerator(<>Tasks name and duration can be updated</>),
      listComponentGenerator(<><strong>Import tasks</strong> from user's <code>Calendar</code></>),
      listComponentGenerator(<>See predicted end time for Focus Session</>),
      listComponentGenerator(<>During Focus Session you can see current task remaining time, next activity name, and how
        much time has been saved or exceeded</>),
      listComponentGenerator(<>Complete, Pause or Add more time to Focus Session</>),
      listComponentGenerator(<><strong>Live Activities</strong> allow to see Focus Session in <strong>Dynamic Island or Lock
        Screen</strong></>),
      listComponentGenerator(<><strong>Notifications</strong>: user get notified before a task expires, when it expires and when is
        overdue</>),
      listComponentGenerator(<>Focus Session's current status <strong>updates on background</strong> (timer and notifications)</>),
      listComponentGenerator(<>Tasks are persisted using <code>UserDefault</code></>)
    ],
    teachStack: [
      listComponentGenerator(<>Swift</>),
      listComponentGenerator(<>SwiftUI</>),
      listComponentGenerator(<>UsersDefaults</>),
      listComponentGenerator(<>Architecture: MVVM</>)
    ],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore' +
      ' et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ' +
      'ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat ' +
      'nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim ' +
      'id est laborum.',
    buttons: [
      (
        <Button className="">
          See GitHub Repo
        </Button>
      ),
      (
        <a
          href="https://apps.apple.com/us/app/improvify-habit-tracker/id6742771479?itscg=30200&itsct=apps_box_badge&mttnsubad=6742771479"
          style={{display: "inline-block"}}
        >
          <img
            src="https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/black/en-us?releaseDate=1741305600"
            alt="Download on the App Store"
            style={{height: 60}}/>
        </a>

      )
    ]
  }

  return { focusFlowInfo };
}