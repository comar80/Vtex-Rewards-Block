/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = ['rewards', 'rewardslink'] as const;

function Points() {
  //const [sessionData, setSessionData] = useState();
  const [points, setPoints] = useState(false)
  const [clientId, setClientId] = useState(null)
  useEffect(() => {
    fetch('/api/sessions?items=*')
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        console.log(res.namespaces.profile?.id?.value)
        if (res.namespaces?.public?.isLoggedIn?.value) {
          setClientId(res.namespaces.profile.id.value)
          setPoints(res.namespaces.profile.points.value)
        }
      })
  })

  useEffect(() => {
    if (clientId) {
      fetch(`/_v/pvt/points/${clientId}`)
        .then((res) => res.json())
        .then((res) => {
          console.log(res)
          if (
            res.profile?.public?.isLoggedIn?.value &&
            res.profile.points.value !== points
          ) {
            setPoints(res.profile.points.value)
          }
        })
    }
  })

  const handles = useCssHandles(CSS_HANDLES);

  // return <>{points && <div>Pontos: {points} </div>}</>

  return (
    <div className={`${handles.rewards} c-muted-1 db tc t-action bg-transparent b--transparent c-action-primary hover-b--transparent hover-bg-action-secondary`}>
      <h3 >
        <a className={`${handles.rewardslink}`} href="/account#/points">Pontos: {points}</a>
      </h3>
    </div>
  );
}

export default Points
