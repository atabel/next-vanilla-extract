import { assignInlineVars } from '@vanilla-extract/dynamic'
import * as styles from './page.css'

export default function Home() {
  const color = "blue";
  return (
    <main>
      <div className={styles.example} style={assignInlineVars({[styles.vars.backgroundColor]: color})}>Example</div>
    </main>
  )
}
