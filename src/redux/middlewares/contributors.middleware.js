import { createAsyncThunk } from "@reduxjs/toolkit";
import { externalApiWrapper } from "../../utils/externalApiWrapper";
import { setContributor } from "../slices/contributors";

export const getContributors = createAsyncThunk(
  "contributor/getContributors",
  async (args, { dispatch }) => {
    try {
      const project = args.project;

      return (await externalApiWrapper())
        .get(`https://api.github.com/repos/NimbleEdge/${project}/contributors`)
        .then((res) => {
          let data = res.data || [];
          let result = data.map((item) => {
            return { username: item.login, avatar: item.avatar_url };
          });
          dispatch(
            setContributor({
              contributor: { project: project, contributors: result },
            })
          );
        })
        .catch((err) => {
          console.log(`Failed to fetch: ${err.message}`);
        });
    } catch (error) {
      console.log(`Failed to fetch: ${error.message}`);
    }
  }
);
