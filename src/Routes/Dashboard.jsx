import React from "react";
import { useEffect } from "react";
import NavBar from "../components/NavBar";
import Carousel from "../components/dashboard/Carousel";
import { Typography } from "@mui/joy";
import Calendar from "../components/dashboard/Calendar.jsx";
import { Container } from "@mui/joy";
import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import {
  Button,
  Cascader,
  Checkbox,
  ColorPicker,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Rate,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
} from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../components/landing/Footer.jsx";
import BackTop from "antd/es/float-button/BackTop.js";

export default function Dashboard() {
  const { RangePicker } = DatePicker;
  const { TextArea } = Input;
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8080/api/getEvents"); // Replace with your API endpoint
        setOptions(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Sending & Receiving data
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      await axios.post("http://127.0.0.1:8080/api/test", values);
      alert("Event Submitted");
      navigate("/Dashboard");
    } catch (error) {
      alert("Error: Verify all information is correct.");
    }
  };

  const onFinishDelete = async (values) => {
    try {
      await axios.post("http://127.0.0.1:8080/api/deletetest", values);
      alert("Delete Request Submitted");
      navigate("/Dashboard");
    } catch (error) {
      alert("Error: Verify all information is correct.");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const [form] = Form.useForm();

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <NavBar />
      <Carousel />
      <Typography
        level="h1"
        sx={{
          fontWeight: "lg",
          mt: { xs: 15, sm: 10 },
          mr: { xs: 15, sm: 45 },
          fontSize: "clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)",
        }}
      >
        Find Event
      </Typography>
      <Calendar />
      <Typography
        level="h1"
        sx={{
          fontWeight: "lg",
          mt: { xs: 15, sm: 10 },
          mr: { xs: 15, sm: 45 },
          mb: 5,
          fontSize: "clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)",
        }}
      >
        Create Event
      </Typography>
      <Container
        sx={{
          ml: { sm: 80 },
        }}
      >
        <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="vertical"
          style={{
            maxWidth: 700,
          }}
          form={form}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item label="Free Event?" name="free" valuePropName="checked">
            <Checkbox>Free</Checkbox>
          </Form.Item>
          <Form.Item label="Location" name="location">
            <Radio.Group>
              <Radio value="OnCampus"> On Campus </Radio>
              <Radio value="OffCampus"> Off Campus </Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Title" name="title">
            <Input />
          </Form.Item>
          <Form.Item label="Organizer" name="organizer">
            <Input />
          </Form.Item>
          <Form.Item label="Post Event on:" name="postDate">
            <DatePicker />
          </Form.Item>
          <Form.Item label="Start - End Date" name="rangeDate">
            <RangePicker
              renderExtraFooter={() => "Remember to be safe!"}
              showTime
              showHour
              showMinute
            />
          </Form.Item>
          <Form.Item label="Max People" name="maxPeople">
            <InputNumber />
          </Form.Item>
          <Form.Item label="Description" name="description">
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item label="21+" valuePropName="checked" name="adultOnly">
            <Switch />
          </Form.Item>
          <Form.Item
            label="Event Image"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload action="/upload.do" listType="picture-card">
              <button
                style={{
                  border: 0,
                  background: "none",
                }}
                type="button"
              >
                <PlusOutlined />
                <div
                  style={{
                    marginTop: 8,
                  }}
                >
                  Upload
                </div>
              </button>
            </Upload>
          </Form.Item>
          <Form.Item label="Theme Color">
            <ColorPicker />
          </Form.Item>
          <Form.Item label="Rate">
            <Rate />
          </Form.Item>{" "}
          <Form.Item label="Create Event">
            <Button htmlType="submit">Submit</Button>
          </Form.Item>
        </Form>
      </Container>
      <Typography
        level="h1"
        sx={{
          fontWeight: "lg",
          mt: { xs: 15, sm: 10 },
          mr: { xs: 15, sm: 45 },
          mb: 5,
          fontSize: "clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)",
        }}
      >
        Delete Event
      </Typography>
      <Container
        sx={{
          ml: { sm: 80 },
        }}
      >
        <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          style={{
            maxWidth: 600,
          }}
          form={form}
          onFinish={onFinishDelete}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item label="Your Events" name="event">
            <Select loading={loading} placeholder="Select your Event...">
              {options.map((option) => (
                <Select.Option key={options.value} value={option.label}>
                  {option.label}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="Delete Event">
            <Button htmlType="submit">Delete</Button>
          </Form.Item>
        </Form>
      </Container>
      <Footer />
      <BackTop />
    </div>
  );
}
