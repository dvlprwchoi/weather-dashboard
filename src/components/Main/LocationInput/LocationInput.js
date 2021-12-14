function LocationInput() {
  return (
    <div className="location-input">
      <label className="locationInputBox" htmlFor="location">
        <input
          type="text"
          placeholder="city"
          name="location"
          id="location"
        ></input>
      </label>
      <button className="locationInputSubmitButton">Submit</button>
    </div>
  );
}

export default LocationInput;
