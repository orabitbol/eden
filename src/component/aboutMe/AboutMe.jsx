import React from 'react'
import '../../App.scss'
import Logo from '../../assets/logo.jpeg'
import Picture from '../../assets/pic_eden.jpeg'
const AboutMe = () => {
    return (
        <div className="page-about-me">
            <div className='header'>
                <img
                    style={{ width: '100%', height: '200px' }}
                    src={Logo} />
            </div>
            <div className='about_me'>
                <img className='picture-me' src={Picture} />
                <div className='text'>
                    קצת עלי..
                    <br />
                    <br />
                    עדן אזולאי נשואה+2❣️
                    <br />
                    בעלת תואר ראשון במנהל וכלכלה
                    תעודות והכשרות בגישור.
                    <br />
                    שהבנתי שהייעוד שלי בחיים הוא לעזור לייעץ ולכוון הלכתי ללמוד כדי לתת לכם כלים.
                    <br />
                    אז כיום אני נומרולוגית מעשית מוסמכת.
                    <br />
                    ואני מאמינה מכל הלב שיש לחיים האלה הרבה יותר מה להציע לנו.
                    <br />
                    אם בורא עולם שלח לנו כלים שנוכל להתקדם איתם בחיים אז למה לא להשתמש בהם?
                </div>
            </div>

            <div className='back-page' >
                <a
                    href='/'
                    style={{ color: 'black', textDecoration: 'none', fontSize: '20px' }}
                > חזור </a>

            </div>
        </div>
    )
}

export default AboutMe