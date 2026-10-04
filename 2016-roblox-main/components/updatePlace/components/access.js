import updatePlaceStore from "../stores/updatePlaceStore";
import {useEffect, useState} from "react";
import ActionButton from "../../actionButton";
import useButtonStyles from "../../../styles/buttonStyles";
import {setUniverseMaxPlayers, setPlaceYear, setRigType} from "../../../services/develop";
import AuthenticationStore from "../../../stores/authentication";

const Access = props => {
  const s = useButtonStyles();
  const store = updatePlaceStore.useContainer();
  const [maxPlayers, setMaxPlayers] = useState(10);
  const [rigTypeValue, setRigTypeValue] = useState("playerChoice");
  const auth = AuthenticationStore.useContainer();
  // the year dropdown is only enabled for user id 1; everyone else is locked to 2016
  const canPickYear = auth.userId === 1;
  const [yearValue, setYearValue] = useState(2016);
  const year = canPickYear ? yearValue : 2016;
  const [feedback, setFeedback] = useState(null);

  const resetForm = () => {
    setFeedback(null);
    setMaxPlayers(store.details.maxPlayerCount);
	setRigTypeValue(store.details.rigType || "playerChoice");
    setYearValue(store.details.year || 2016);
  }

  const save = () => {
    store.setLocked(true);
    setFeedback(null);
    Promise.all([
      setUniverseMaxPlayers({
        universeId: store.details.universeId,
        maxPlayers: maxPlayers,
      }),
	  setRigType({
		  universeId: store.details.universeId,
		  rigType: rigTypeValue,
	  }),
      setPlaceYear({
        universeId: store.details.universeId,
        year: year,
      })
    ]).then(() => {
      window.location.reload();
    }).catch(e => {
      store.setLocked(false);
      setFeedback(e.message);
    })
  }

  useEffect(() => {
    resetForm();
  }, [store.details]);

  return <div className='row mt-4'>
    <div className='col-12'>
      <h2 className='fw-200f mb-4'>Access</h2>
      {
        feedback ? <p className='text-danger'>{feedback}</p> : null
      }
      <div>
        <p className='fw-bold'>Maximum Visitor Count:</p>
        <select value={maxPlayers} className='br-none border-1 border-secondary pe-2' onChange={v => {
          setMaxPlayers(parseInt(v.currentTarget.value, 10));
        }}>
          {[... new Array(30)].map((_, i) => {
            return <option value={i+1} key={i}>{i+1}</option>
          })}
        </select>
      </div>

      <div className='mt-3'>
        <p className='fw-bold'>Year:</p>
        {canPickYear ? <select value={yearValue} className='br-none border-1 border-secondary pe-2' onChange={v => {
          setYearValue(parseInt(v.currentTarget.value, 10));
        }}>
          <option value={2016}>2016</option>
          <option value={2018}>2018</option>
          <option value={2020}>2020</option>
        </select> : <select value={2016} disabled title='The year is locked to 2016' className='br-none border-1 border-secondary pe-2' style={{ background: '#e9ecef', color: '#6c757d', cursor: 'not-allowed' }}>
          <option value={2016}>2016</option>
        </select>}
      </div>
	  
	  <div className='mt-3'>
        <p className='fw-bold'>Rig Type:</p>
        <select value={rigTypeValue} className='br-none border-1 border-secondary pe-2' onChange={v => {
          setRigTypeValue(v.currentTarget.value);
        }}>
          <option value="playerChoice">Player Choice</option>
		  <option value="MorphToR6">R6</option>
		  <option value="MorphToR15">R15</option>
        </select>
      </div>

      <div className='mt-4'>
        <div className='d-inline-block'>
          <ActionButton disabled={store.locked} className={s.normal + ' ' + s.continueButton} label='Save' onClick={save} />
        </div>
        <div className='d-inline-block ms-4'>
          <ActionButton disabled={store.locked} className={s.normal + ' ' + s.cancelButton} label='Cancel' onClick={() => {
            resetForm();
          }} />
        </div>
      </div>
    </div>
  </div>
}

export default Access;