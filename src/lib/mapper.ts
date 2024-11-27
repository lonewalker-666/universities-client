import { get } from "lodash";

export const ProfileMapper = (data: any) => {
  const firstName = get(data, "firstName", "");
  const lastName = get(data, "lastName", "");
  const about = get(data, "about", "");
  const email = get(data, "email", "");
  const mobile = get(data, "mobile", "");
  const location = get(data, "location", "");
  const gender_id = get(data, "gender_id", "");
  const race_id = get(data, "race_id", "");
  const first_generation_id = get(data, "first_generation_id", "");
  const citizenship_id = get(data, "citizenship_id", "");
  const armed_force_status_id = get(data, "armed_force_status_id", "");
  const financial_aid_id = get(data, "financial_aid_id", "");
  const high_school_id = get(data, "high_school_id", "");
  const grade_level_id = get(data, "grade_level_id", "");
  const graduation_date = get(data, "graduation_date", "");
  const college_start_date = get(data, "college_start_date", "");
  const class_rank = get(data, "class_rank", "");
  const gpa = get(data, "gpa", "");
  const physical_disability = get(data, "physical_disability", "");
  const houseHeld = get(data, "houseHeld", "");
  const additionalInfo = get(data, "additionalInfo", "");

  return {
    firstName,
    lastName,
    email,
    about,
    mobile,
    location,
    gender_id,
    race_id,
    first_generation_id,
    citizenship_id,
    armed_force_status_id,
    financial_aid_id,
    high_school_id,
    grade_level_id,
    graduation_date,
    college_start_date,
    class_rank,
    gpa,
    physical_disability,
    houseHeld,
    additionalInfo,
  };
};

export const CollegesListMapper = (data: any) => {
  const university_name = get(data, "university_name", "");
  const city_state = get(data, "city_state", "");
  const school_type = get(data, "school_type", "");
  const average_annual_cost = get(data, "average_annual_cost", "");
  return { university_name, city_state, school_type, average_annual_cost };
};

export const CollegeDetailsMapper = (data: any) => {
  const wishlisted = get(data, "wishlisted", false);
  const university_name = get(data, "overview.university_name", "");
  const city_state = get(data, "overview.city_state", "");
  const school_type = get(data, "overview.school_type", "");
  const average_annual_cost = get(data, "overview.average_annual_cost", "");
  const number_of_undergraduate_students = get(
    data,
    "overview.number_of_undergraduate_students",
    ""
  );
  const official_website = get(data, "overview.official_website", "");
  const location_type = get(data, "overview.location_type", "");
  const graduation_rate = get(data, "overview.graduation_rate", "");
  const median_earnings = get(data, "overview.median_earnings", "");
  const study_fields = get(data, "fields_of_study.top_fields", []);
  const costs_average_annual_cost = get(data, "costs.average_annual_cost", "");
  const by_family_income = get(data, "costs.by_family_income", []);
  const retention_rate = get(
    data,
    "graduation_and_retention.retention_rate",
    ""
  );
  const transfer_rate = get(data, "graduation_and_retention.transfer_rate", "");
  const withdrawal_rate = get(
    data,
    "graduation_and_retention.withdrawal_rate",
    ""
  );
  const full_time_students = get(
    data,
    "campus_diversity.full_time_students",
    ""
  );
  const part_time_students = get(
    data,
    "campus_diversity.part_time_students",
    ""
  );
  const student_size = get(data, "campus_diversity.student_size", "");
  const student_size_type = get(data, "campus_diversity.student_size_type", "");
  const student_to_faculty_ratio = get(
    data,
    "campus_diversity.student_to_faculty_ratio",
    ""
  );
  const demographics = get(data, "campus_diversity.demographics", {});
  const test_scores_and_acceptance = get(
    data,
    "test_scores_and_acceptance",
    {}
  );

  const acceptance_rate = get(
    test_scores_and_acceptance,
    "acceptance_rate",
    ""
  );

  const act_composite_25th_percentile = get(
    test_scores_and_acceptance,
    "act.act_composite_25th_percentile",
    ""
  );
  const act_english_25th_percentile = get(
    test_scores_and_acceptance,
    "act.act_english_25th_percentile",
    ""
  );
  const act_math_25th_percentile = get(
    test_scores_and_acceptance,
    "act.act_math_25th_percentile",
    ""
  );

  const act_composite_75th_percentile = get(
    test_scores_and_acceptance,
    "act.act_composite_75th_percentile",
    ""
  );
  const act_english_75th_percentile = get(
    test_scores_and_acceptance,
    "act.act_english_75th_percentile",
    ""
  );
  const act_math_75th_percentile = get(
    test_scores_and_acceptance,
    "act.act_math_75th_percentile",
    ""
  );

  const sat_25th_percentile = get(
    test_scores_and_acceptance,
    "sat.sat_25th_percentile",
    ""
  );
  const sat_reading_and_writing_25th_percentile = get(
    test_scores_and_acceptance,
    "sat.sat_reading_and_writing_25th_percentile",
    ""
  );
  const sat_math_25th_percentile = get(
    test_scores_and_acceptance,
    "sat.sat_math_25th_percentile",
    ""
  );

  const sat_75th_percentile = get(
    test_scores_and_acceptance,
    "sat.sat_75th_percentile",
    ""
  );
  const sat_reading_and_writing_75th_percentile = get(
    test_scores_and_acceptance,
    "sat.sat_reading_and_writing_75th_percentile",
    ""
  );
  const sat_math_75th_percentile = get(
    test_scores_and_acceptance,
    "sat.sat_math_75th_percentile",
    ""
  );

  return {
    university_name,
    city_state,
    school_type,
    average_annual_cost,
    number_of_undergraduate_students,
    official_website,
    location_type,
    graduation_rate,
    median_earnings,
    study_fields,
    costs_average_annual_cost,
    by_family_income,
    retention_rate,
    transfer_rate,
    withdrawal_rate,
    full_time_students,
    part_time_students,
    student_size,
    student_size_type,
    student_to_faculty_ratio,
    demographics,
    acceptance_rate,
    act_composite_25th_percentile,
    act_english_25th_percentile,
    act_math_25th_percentile,
    act_composite_75th_percentile,
    act_english_75th_percentile,
    act_math_75th_percentile,
    sat_25th_percentile,
    sat_reading_and_writing_25th_percentile,
    sat_math_25th_percentile,
    sat_75th_percentile,
    sat_reading_and_writing_75th_percentile,
    sat_math_75th_percentile,
    wishlisted,
  };
};

export const StudyFieldsMapper = (data: any) => {
  const field = get(data, "field_of_study", "");
  const median_earnings = get(data, "median_earnings", "");
  const graduates = get(data, "graduates", "");
  return { field, median_earnings, graduates };
};
